const diagnosisService = require("./diagnosisService");

const getDiagnosisSummary = (patientId) => {
    const diagnoses = diagnosisService.getDiagnosesByPatientId(patientId);

    const totalDiagnoses = diagnoses.length;

    const activeDiagnoses = diagnoses.filter(
        diagnosis =>
            diagnosis.status &&
            diagnosis.status.toLowerCase() === "active"
    ).length;

    const resolvedDiagnoses = diagnoses.filter(
        diagnosis =>
            diagnosis.status &&
            diagnosis.status.toLowerCase() === "resolved"
    ).length;

    const severeDiagnoses = diagnoses.filter(
        diagnosis =>
            diagnosis.severity &&
            diagnosis.severity.toLowerCase() === "severe"
    ).length;

    return {
        patientId: Number(patientId),
        totalDiagnoses,
        activeDiagnoses,
        resolvedDiagnoses,
        severeDiagnoses,
        diagnoses
    };
};

module.exports = {
    getDiagnosisSummary
};