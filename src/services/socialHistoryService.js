let socialHistoryRecords = [];
let nextSocialHistoryId = 1;

const createSocialHistory = (patientId, historyData) => {
    const record = {
        id: nextSocialHistoryId++,
        patientId: Number(patientId),
        ...historyData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    socialHistoryRecords.push(record);

    return record;
};

const getSocialHistoryByPatientId = (patientId) => {
    return socialHistoryRecords.filter(
        record => record.patientId === Number(patientId)
    );
};

const getSocialHistoryById = (patientId, historyId) => {
    return socialHistoryRecords.find(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(historyId)
    );
};

const updateSocialHistory = (patientId, historyId, historyData) => {
    const record = getSocialHistoryById(patientId, historyId);

    if (!record) {
        return null;
    }

    Object.assign(record, historyData);
    record.updatedAt = new Date().toISOString();

    return record;
};

const deleteSocialHistory = (patientId, historyId) => {
    const index = socialHistoryRecords.findIndex(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(historyId)
    );

    if (index === -1) {
        return null;
    }

    const deletedRecord = socialHistoryRecords[index];

    socialHistoryRecords.splice(index, 1);

    return deletedRecord;
};

module.exports = {
    createSocialHistory,
    getSocialHistoryByPatientId,
    getSocialHistoryById,
    updateSocialHistory,
    deleteSocialHistory
};