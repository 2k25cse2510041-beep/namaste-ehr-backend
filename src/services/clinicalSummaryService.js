const patientService = require("./patientService");
const diagnosisService = require("./diagnosisService");
const medicationHistoryService = require("./medicationHistoryService");
const procedureService = require("./procedureService");
const allergyService = require("./allergyService");
const vitalSignsService = require("./vitalSignsService");
const labReportService = require("./labReportService");
const clinicalNoteService = require("./clinicalNoteService");

const getPatientClinicalSummary = (patientId) => {
    const patient = patientService.getPatientById(patientId);

    if (!patient) {
        return null;
    }

    const diagnoses =
        diagnosisService.getDiagnosesByPatientId(patientId);

    const medications =
        medicationHistoryService.getMedicationHistoryByPatientId(
            patientId
        );

    const procedures =
        procedureService.getProceduresByPatientId(patientId);

    const allergies =
        allergyService.getAllergiesByPatientId(patientId);

    const vitalSigns =
        vitalSignsService.getVitalSignsByPatientId(patientId);

    const labReports =
        labReportService.getLabReportsByPatientId(patientId);

    const clinicalNotes =
        clinicalNoteService.getClinicalNotesByPatientId(patientId);

    return {
        patient,

        summary: {
            totalDiagnoses: diagnoses.length,
            totalMedications: medications.length,
            totalProcedures: procedures.length,
            totalAllergies: allergies.length,
            totalVitalSigns: vitalSigns.length,
            totalLabReports: labReports.length,
            totalClinicalNotes: clinicalNotes.length
        },

        diagnoses,
        medications,
        procedures,
        allergies,
        vitalSigns,
        labReports,
        clinicalNotes,

        generatedAt: new Date().toISOString()
    };
};

module.exports = {
    getPatientClinicalSummary
};