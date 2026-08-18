const patientService = require("./patientService");
const diagnosisService = require("./diagnosisService");
const prescriptionService = require("./prescriptionService");
const procedureService = require("./procedureService");
const allergyService = require("./allergyService");
const vitalSignsService = require("./vitalSignsService");
const labReportService = require("./labReportService");
const clinicalNoteService = require("./clinicalNoteService");

const getDashboardStats = () => {
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
        totalClinicalNotes
    };
};

module.exports = {
    getDashboardStats
};