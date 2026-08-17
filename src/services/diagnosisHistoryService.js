let diagnosisHistoryRecords = [];
let nextDiagnosisHistoryId = 1;

const createDiagnosisHistory = (patientId, diagnosisData) => {
    const record = {
        id: nextDiagnosisHistoryId++,
        patientId: Number(patientId),
        ...diagnosisData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    diagnosisHistoryRecords.push(record);

    return record;
};

const getDiagnosisHistoryByPatientId = (patientId) => {
    return diagnosisHistoryRecords.filter(
        record => record.patientId === Number(patientId)
    );
};

const getDiagnosisHistoryById = (patientId, diagnosisHistoryId) => {
    return diagnosisHistoryRecords.find(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(diagnosisHistoryId)
    );
};

const updateDiagnosisHistory = (
    patientId,
    diagnosisHistoryId,
    diagnosisData
) => {
    const record = getDiagnosisHistoryById(
        patientId,
        diagnosisHistoryId
    );

    if (!record) {
        return null;
    }

    Object.assign(record, diagnosisData);
    record.updatedAt = new Date().toISOString();

    return record;
};

const deleteDiagnosisHistory = (
    patientId,
    diagnosisHistoryId
) => {
    const index = diagnosisHistoryRecords.findIndex(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(diagnosisHistoryId)
    );

    if (index === -1) {
        return null;
    }

    const deletedRecord = diagnosisHistoryRecords[index];

    diagnosisHistoryRecords.splice(index, 1);

    return deletedRecord;
};

module.exports = {
    createDiagnosisHistory,
    getDiagnosisHistoryByPatientId,
    getDiagnosisHistoryById,
    updateDiagnosisHistory,
    deleteDiagnosisHistory
};