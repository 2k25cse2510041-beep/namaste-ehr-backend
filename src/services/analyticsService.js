const patientService = require("./patientService");
const diagnosisService = require("./diagnosisService");
const prescriptionService = require("./prescriptionService");
const procedureService = require("./procedureService");
const allergyService = require("./allergyService");
const vitalSignsService = require("./vitalSignsService");
const labReportService = require("./labReportService");
const clinicalNoteService = require("./clinicalNoteService");

const namasteIcdMappingService = require("./namasteIcdMappingService");
const namasteTerminologyService = require("./namasteTerminologyService");


// =====================================================
// EHR STATISTICS
// =====================================================

const getEhrStatistics = () => {
    const patients = patientService.getAllPatients();

    let totalDiagnoses = 0;
    let totalMedications = 0;
    let totalProcedures = 0;
    let totalAllergies = 0;
    let totalVitalSigns = 0;
    let totalLabReports = 0;
    let totalClinicalNotes = 0;

    patients.forEach(patient => {
        const patientId = patient.id;

        totalDiagnoses +=
            diagnosisService.getDiagnosesByPatientId(patientId).length;

        totalMedications +=
            prescriptionService.getPrescriptionsByPatientId(patientId).length;

        totalProcedures +=
            procedureService.getProceduresByPatientId(patientId).length;

        totalAllergies +=
            allergyService.getAllergiesByPatientId(patientId).length;

        totalVitalSigns +=
            vitalSignsService.getVitalSignsByPatientId(patientId).length;

        totalLabReports +=
            labReportService.getLabReportsByPatientId(patientId).length;

        totalClinicalNotes +=
            clinicalNoteService.getClinicalNotesByPatientId(patientId).length;
    });

    return {
        totalPatients: patients.length,
        totalDiagnoses,
        totalMedications,
        totalProcedures,
        totalAllergies,
        totalVitalSigns,
        totalLabReports,
        totalClinicalNotes,
        totalClinicalRecords:
            totalDiagnoses +
            totalMedications +
            totalProcedures +
            totalAllergies +
            totalVitalSigns +
            totalLabReports +
            totalClinicalNotes
    };
};


// =====================================================
// MAPPING STATISTICS
// =====================================================

const getMappingStatistics = () => {
    const mappings =
        namasteIcdMappingService.getAllMappings();

    const pending = mappings.filter(
        mapping =>
            mapping.status &&
            mapping.status.toLowerCase() === "pending"
    ).length;

    const verified = mappings.filter(
        mapping =>
            mapping.status &&
            mapping.status.toLowerCase() === "verified"
    ).length;

    const rejected = mappings.filter(
        mapping =>
            mapping.status &&
            mapping.status.toLowerCase() === "rejected"
    ).length;

    const modified = mappings.filter(
        mapping =>
            mapping.status &&
            mapping.status.toLowerCase() === "modified"
    ).length;

    const highConfidence = mappings.filter(
        mapping =>
            mapping.confidence &&
            mapping.confidence.toLowerCase() === "high"
    ).length;

    const moderateConfidence = mappings.filter(
        mapping =>
            mapping.confidence &&
            mapping.confidence.toLowerCase() === "moderate"
    ).length;

    const lowConfidence = mappings.filter(
        mapping =>
            mapping.confidence &&
            mapping.confidence.toLowerCase() === "low"
    ).length;

    return {
        totalMappings: mappings.length,

        status: {
            pending,
            verified,
            rejected,
            modified
        },

        confidence: {
            high: highConfidence,
            moderate: moderateConfidence,
            low: lowConfidence
        }
    };
};


// =====================================================
// TERMINOLOGY USAGE
// =====================================================

const getTerminologyUsage = () => {

    const mappings =
        namasteIcdMappingService.getAllMappings();

    const terminology =
        namasteTerminologyService.getAllTerminology();

    const usage = {};

    mappings.forEach(mapping => {

        const code = mapping.namasteCode;

        if (!usage[code]) {
            usage[code] = {
                namasteCode: code,
                namasteTerm: mapping.namasteTerm,
                mappingCount: 0
            };
        }

        usage[code].mappingCount++;
    });

    return {
        totalTerminologyTerms: terminology.length,

        mappedTerms: Object.keys(usage).length,

        unmappedTerms:
            Math.max(
                terminology.length -
                Object.keys(usage).length,
                0
            ),

        usage: Object.values(usage)
    };
};


// =====================================================
// COMPLETE ANALYTICS
// =====================================================

const getAnalytics = () => {
    return {
        ehrStatistics: getEhrStatistics(),
        mappingStatistics: getMappingStatistics(),
        terminologyUsage: getTerminologyUsage()
    };
};


module.exports = {
    getAnalytics,
    getEhrStatistics,
    getMappingStatistics,
    getTerminologyUsage
};