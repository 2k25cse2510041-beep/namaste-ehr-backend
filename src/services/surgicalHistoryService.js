let surgicalHistoryRecords = [];
let nextSurgicalHistoryId = 1;

const createSurgicalHistory = (patientId, surgeryData) => {
    const record = {
        id: nextSurgicalHistoryId++,
        patientId: Number(patientId),
        ...surgeryData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    surgicalHistoryRecords.push(record);

    return record;
};

const getSurgicalHistoryByPatientId = (patientId) => {
    return surgicalHistoryRecords.filter(
        record => record.patientId === Number(patientId)
    );
};

const getSurgicalHistoryById = (patientId, surgeryId) => {
    return surgicalHistoryRecords.find(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(surgeryId)
    );
};

const updateSurgicalHistory = (patientId, surgeryId, surgeryData) => {
    const record = getSurgicalHistoryById(patientId, surgeryId);

    if (!record) {
        return null;
    }

    Object.assign(record, surgeryData);
    record.updatedAt = new Date().toISOString();

    return record;
};

const deleteSurgicalHistory = (patientId, surgeryId) => {
    const index = surgicalHistoryRecords.findIndex(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(surgeryId)
    );

    if (index === -1) {
        return null;
    }

    const deletedRecord = surgicalHistoryRecords[index];

    surgicalHistoryRecords.splice(index, 1);

    return deletedRecord;
};

module.exports = {
    createSurgicalHistory,
    getSurgicalHistoryByPatientId,
    getSurgicalHistoryById,
    updateSurgicalHistory,
    deleteSurgicalHistory
};