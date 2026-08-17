let diagnoses = [];
let nextDiagnosisId = 1;

const createDiagnosis = (patientId, diagnosisData) => {
    const diagnosis = {
        id: nextDiagnosisId++,
        patientId: Number(patientId),
        ...diagnosisData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    diagnoses.push(diagnosis);

    return diagnosis;
};

const getDiagnosesByPatientId = (patientId) => {
    return diagnoses.filter(
        diagnosis => diagnosis.patientId === Number(patientId)
    );
};

const getDiagnosisById = (patientId, diagnosisId) => {
    return diagnoses.find(
        diagnosis =>
            diagnosis.patientId === Number(patientId) &&
            diagnosis.id === Number(diagnosisId)
    );
};

const updateDiagnosis = (patientId, diagnosisId, diagnosisData) => {
    const diagnosis = getDiagnosisById(patientId, diagnosisId);

    if (!diagnosis) {
        return null;
    }

    Object.assign(diagnosis, diagnosisData);
    diagnosis.updatedAt = new Date().toISOString();

    return diagnosis;
};

const deleteDiagnosis = (patientId, diagnosisId) => {
    const index = diagnoses.findIndex(
        diagnosis =>
            diagnosis.patientId === Number(patientId) &&
            diagnosis.id === Number(diagnosisId)
    );

    if (index === -1) {
        return null;
    }

    const deletedDiagnosis = diagnoses[index];

    diagnoses.splice(index, 1);

    return deletedDiagnosis;
};

module.exports = {
    createDiagnosis,
    getDiagnosesByPatientId,
    getDiagnosisById,
    updateDiagnosis,
    deleteDiagnosis
};