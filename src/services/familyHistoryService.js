let familyHistoryRecords = [];
let nextFamilyHistoryId = 1;

const createFamilyHistory = (patientId, historyData) => {
    const record = {
        id: nextFamilyHistoryId++,
        patientId: Number(patientId),
        ...historyData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    familyHistoryRecords.push(record);

    return record;
};

const getFamilyHistoryByPatientId = (patientId) => {
    return familyHistoryRecords.filter(
        record => record.patientId === Number(patientId)
    );
};

const getFamilyHistoryById = (patientId, historyId) => {
    return familyHistoryRecords.find(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(historyId)
    );
};

const updateFamilyHistory = (patientId, historyId, historyData) => {
    const record = getFamilyHistoryById(patientId, historyId);

    if (!record) {
        return null;
    }

    Object.assign(record, historyData);
    record.updatedAt = new Date().toISOString();

    return record;
};

const deleteFamilyHistory = (patientId, historyId) => {
    const index = familyHistoryRecords.findIndex(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(historyId)
    );

    if (index === -1) {
        return null;
    }

    const deletedRecord = familyHistoryRecords[index];

    familyHistoryRecords.splice(index, 1);

    return deletedRecord;
};

module.exports = {
    createFamilyHistory,
    getFamilyHistoryByPatientId,
    getFamilyHistoryById,
    updateFamilyHistory,
    deleteFamilyHistory
};