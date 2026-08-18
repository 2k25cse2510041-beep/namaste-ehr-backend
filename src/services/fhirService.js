const clinicalSummaryService = require("./clinicalSummaryService");

// =====================================================
// PATIENT
// =====================================================

const generatePatientResource = (patient) => {
    return {
        resourceType: "Patient",
        id: String(patient.id),

        identifier: [
            {
                system: "https://namaste-ayush.gov.in/patient",
                value: String(patient.id)
            }
        ],

        name: [
            {
                text: patient.name
            }
        ],

        gender: patient.gender,

        birthDate: patient.dateOfBirth,

        telecom: [
            ...(patient.phone
                ? [
                      {
                          system: "phone",
                          value: patient.phone
                      }
                  ]
                : []),

            ...(patient.email
                ? [
                      {
                          system: "email",
                          value: patient.email
                      }
                  ]
                : [])
        ]
    };
};


// =====================================================
// CONDITIONS
// =====================================================

const generateConditionResources = (diagnoses) => {
    return diagnoses.map((diagnosis) => {
        return {
            resourceType: "Condition",

            id: String(diagnosis.id),

            subject: {
                reference:
                    `Patient/${diagnosis.patientId}`
            },

            code: {
                text: diagnosis.diagnosis
            },

            recordedDate: diagnosis.date,

            note: diagnosis.description
                ? [
                      {
                          text:
                              diagnosis.description
                      }
                  ]
                : []
        };
    });
};


// =====================================================
// MEDICATION REQUEST
// =====================================================

const generateMedicationRequestResources = (
    medications
) => {
    return medications.map((medication) => {
        return {
            resourceType: "MedicationRequest",

            id: String(medication.id),

            status:
                medication.status ||
                "active",

            intent: "order",

            medicationCodeableConcept: {
                text:
                    medication.medicationName
            },

            subject: {
                reference:
                    `Patient/${medication.patientId}`
            },

            authoredOn:
                medication.startDate,

            dosageInstruction: [
                {
                    text: [
                        medication.dosage,
                        medication.frequency,
                        medication.route
                    ]
                        .filter(Boolean)
                        .join(", ")
                }
            ],

            reasonCode:
                medication.indication
                    ? [
                          {
                              text:
                                  medication.indication
                          }
                      ]
                    : [],

            requester:
                medication.prescribedBy
                    ? {
                          display:
                              medication.prescribedBy
                      }
                    : undefined,

            dispenseRequest:
                medication.endDate
                    ? {
                          validityPeriod: {
                              start:
                                  medication.startDate,

                              end:
                                  medication.endDate
                          }
                      }
                    : undefined,

            note:
                medication.notes
                    ? [
                          {
                              text:
                                  medication.notes
                          }
                      ]
                    : []
        };
    });
};


// =====================================================
// PROCEDURES
// =====================================================

const generateProcedureResources = (
    procedures
) => {
    return procedures.map((procedure) => {
        return {
            resourceType: "Procedure",

            id: String(procedure.id),

            status: "completed",

            code: {
                text:
                    procedure.procedureName
            },

            subject: {
                reference:
                    `Patient/${procedure.patientId}`
            },

            performedDateTime:
                procedure.procedureDate,

            performer:
                procedure.performedBy
                    ? [
                          {
                              actor: {
                                  display:
                                      procedure.performedBy
                              }
                          }
                      ]
                    : [],

            location:
                procedure.facility
                    ? {
                          display:
                              procedure.facility
                      }
                    : undefined,

            reasonCode:
                procedure.indication
                    ? [
                          {
                              text:
                                  procedure.indication
                          }
                      ]
                    : [],

            outcome:
                procedure.outcome
                    ? {
                          text:
                              procedure.outcome
                          }
                    : undefined,

            note:
                procedure.notes
                    ? [
                          {
                              text:
                                  procedure.notes
                          }
                      ]
                    : []
        };
    });
};


// =====================================================
// ALLERGY INTOLERANCE
// =====================================================

const generateAllergyIntoleranceResources = (
    allergies
) => {
    return allergies.map((allergy) => {
        return {
            resourceType:
                "AllergyIntolerance",

            id: String(allergy.id),

            clinicalStatus: {
                text:
                    allergy.status
            },

            verificationStatus: {
                text: "confirmed"
            },

            code: {
                text:
                    allergy.allergen
            },

            patient: {
                reference:
                    `Patient/${allergy.patientId}`
            },

            reaction: [
                {
                    manifestation: [
                        {
                            text:
                                allergy.reaction
                        }
                    ],

                    severity:
                        allergy.severity
                }
            ],

            note:
                allergy.notes
                    ? [
                          {
                              text:
                                  allergy.notes
                          }
                      ]
                    : []
        };
    });
};


// =====================================================
// VITAL SIGNS → FHIR OBSERVATIONS
// =====================================================

const generateVitalSignsResources = (
    vitalSigns
) => {
    const resources = [];

    vitalSigns.forEach((vital) => {

        // ---------------------------------------------
        // Blood Pressure
        // ---------------------------------------------

        if (vital.bloodPressure) {
            resources.push({
                resourceType:
                    "Observation",

                id:
                    `${vital.id}-blood-pressure`,

                status: "final",

                category: [
                    {
                        text: "vital-signs"
                    }
                ],

                code: {
                    text:
                        "Blood Pressure"
                },

                subject: {
                    reference:
                        `Patient/${vital.patientId}`
                },

                valueString:
                    vital.bloodPressure,

                note:
                    vital.notes
                        ? [
                              {
                                  text:
                                      vital.notes
                              }
                          ]
                        : []
            });
        }


        // ---------------------------------------------
        // Temperature
        // ---------------------------------------------

        if (
            vital.temperature !==
            undefined
        ) {
            resources.push({
                resourceType:
                    "Observation",

                id:
                    `${vital.id}-temperature`,

                status: "final",

                category: [
                    {
                        text: "vital-signs"
                    }
                ],

                code: {
                    text:
                        "Body Temperature"
                },

                subject: {
                    reference:
                        `Patient/${vital.patientId}`
                },

                valueQuantity: {
                    value:
                        Number(
                            vital.temperature
                        ),

                    unit: "°C"
                }
            });
        }


        // ---------------------------------------------
        // Heart Rate
        // ---------------------------------------------

        if (
            vital.heartRate !==
            undefined
        ) {
            resources.push({
                resourceType:
                    "Observation",

                id:
                    `${vital.id}-heart-rate`,

                status: "final",

                category: [
                    {
                        text: "vital-signs"
                    }
                ],

                code: {
                    text:
                        "Heart Rate"
                },

                subject: {
                    reference:
                        `Patient/${vital.patientId}`
                },

                valueQuantity: {
                    value:
                        Number(
                            vital.heartRate
                        ),

                    unit:
                        "beats/min"
                }
            });
        }


        // ---------------------------------------------
        // Respiratory Rate
        // ---------------------------------------------

        if (
            vital.respiratoryRate !==
            undefined
        ) {
            resources.push({
                resourceType:
                    "Observation",

                id:
                    `${vital.id}-respiratory-rate`,

                status: "final",

                category: [
                    {
                        text: "vital-signs"
                    }
                ],

                code: {
                    text:
                        "Respiratory Rate"
                },

                subject: {
                    reference:
                        `Patient/${vital.patientId}`
                },

                valueQuantity: {
                    value:
                        Number(
                            vital.respiratoryRate
                        ),

                    unit:
                        "breaths/min"
                }
            });
        }


        // ---------------------------------------------
        // Oxygen Saturation
        // ---------------------------------------------

        if (
            vital.oxygenSaturation !==
            undefined
        ) {
            resources.push({
                resourceType:
                    "Observation",

                id:
                    `${vital.id}-oxygen-saturation`,

                status: "final",

                category: [
                    {
                        text: "vital-signs"
                    }
                ],

                code: {
                    text:
                        "Oxygen Saturation"
                },

                subject: {
                    reference:
                        `Patient/${vital.patientId}`
                },

                valueQuantity: {
                    value:
                        Number(
                            vital.oxygenSaturation
                        ),

                    unit: "%"
                }
            });
        }


        // ---------------------------------------------
        // Weight
        // ---------------------------------------------

        if (
            vital.weight !==
            undefined
        ) {
            resources.push({
                resourceType:
                    "Observation",

                id:
                    `${vital.id}-weight`,

                status: "final",

                category: [
                    {
                        text: "vital-signs"
                    }
                ],

                code: {
                    text:
                        "Body Weight"
                },

                subject: {
                    reference:
                        `Patient/${vital.patientId}`
                },

                valueQuantity: {
                    value:
                        Number(
                            vital.weight
                        ),

                    unit: "kg"
                }
            });
        }


        // ---------------------------------------------
        // Height
        // ---------------------------------------------

        if (
            vital.height !==
            undefined
        ) {
            resources.push({
                resourceType:
                    "Observation",

                id:
                    `${vital.id}-height`,

                status: "final",

                category: [
                    {
                        text: "vital-signs"
                    }
                ],

                code: {
                    text:
                        "Body Height"
                },

                subject: {
                    reference:
                        `Patient/${vital.patientId}`
                },

                valueQuantity: {
                    value:
                        Number(
                            vital.height
                        ),

                    unit: "cm"
                }
            });
        }
    });

    return resources;
};


// =====================================================
// FHIR BUNDLE
// =====================================================

const generateFhirBundle = (patientId) => {

    const clinicalSummary =
        clinicalSummaryService
            .getPatientClinicalSummary(
                patientId
            );

    if (!clinicalSummary) {
        return null;
    }


    // Patient

    const patientResource =
        generatePatientResource(
            clinicalSummary.patient
        );


    // Conditions

    const conditionResources =
        generateConditionResources(
            clinicalSummary.diagnoses
        );


    // Medications

    const medicationResources =
        generateMedicationRequestResources(
            clinicalSummary.medications
        );


    // Procedures

    const procedureResources =
        generateProcedureResources(
            clinicalSummary.procedures
        );


    // Allergies

    const allergyResources =
        generateAllergyIntoleranceResources(
            clinicalSummary.allergies
        );


    // Vital Signs

    const vitalSignsResources =
        generateVitalSignsResources(
            clinicalSummary.vitalSigns
        );


    // ================================================
    // BUNDLE ENTRIES
    // ================================================

    const entries = [
        {
            fullUrl:
                `Patient/${patientId}`,

            resource:
                patientResource
        }
    ];


    // Conditions

    conditionResources.forEach(
        (condition) => {
            entries.push({
                fullUrl:
                    `Condition/${condition.id}`,

                resource:
                    condition
            });
        }
    );


    // Medications

    medicationResources.forEach(
        (medication) => {
            entries.push({
                fullUrl:
                    `MedicationRequest/${medication.id}`,

                resource:
                    medication
            });
        }
    );


    // Procedures

    procedureResources.forEach(
        (procedure) => {
            entries.push({
                fullUrl:
                    `Procedure/${procedure.id}`,

                resource:
                    procedure
            });
        }
    );


    // Allergies

    allergyResources.forEach(
        (allergy) => {
            entries.push({
                fullUrl:
                    `AllergyIntolerance/${allergy.id}`,

                resource:
                    allergy
            });
        }
    );


    // Vital Signs

    vitalSignsResources.forEach(
        (vital) => {
            entries.push({
                fullUrl:
                    `${vital.resourceType}/${vital.id}`,

                resource:
                    vital
            });
        }
    );


    // ================================================
    // FINAL BUNDLE
    // ================================================

    return {
        resourceType: "Bundle",

        type: "collection",

        identifier: {
            system:
                "https://namaste-ayush.gov.in/ehr",

            value:
                `EHR-${patientId}`
        },

        timestamp:
            new Date().toISOString(),

        total:
            entries.length,

        entry:
            entries,

        interoperability: {
            sourceSystem:
                "NAMASTE EHR",

            terminologyStandard:
                "NAMASTE",

            clinicalCodingStandard:
                "ICD-11",

            exchangeFormat:
                "FHIR-style"
        }
    };
};


// =====================================================
// EXPORTS
// =====================================================

module.exports = {
    generatePatientResource,
    generateConditionResources,
    generateMedicationRequestResources,
    generateProcedureResources,
    generateAllergyIntoleranceResources,
    generateVitalSignsResources,
    generateFhirBundle
};