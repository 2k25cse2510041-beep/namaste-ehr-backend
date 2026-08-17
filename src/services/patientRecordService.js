let patientRecords = [];
let nextRecordId = 1;

const createRecord = (patientId, recordData) => {
    const record = {
        id: nextRecordId++,
        patientId: Number(patientId),
        ...recordData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    patientRecords.push(record);

    return record;
};

const getRecordsByPatientId = (patientId) => {
    return patientRecords.filter(
        record => record.patientId === Number(patientId)
    );
};

const getRecordById = (patientId, recordId) => {
    return patientRecords.find(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(recordId)
    );
};

const updateRecord = (patientId, recordId, recordData) => {
    const record = getRecordById(patientId, recordId);

    if (!record) {
        return null;
    }

    Object.assign(record, recordData);
    record.updatedAt = new Date().toISOString();

    return record;
};

const deleteRecord = (patientId, recordId) => {
    const index = patientRecords.findIndex(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(recordId)
    );

    if (index === -1) {
        return null;
    }

    const deletedRecord = patientRecords[index];

    patientRecords.splice(index, 1);

    return deletedRecord;
};

module.exports = {
    createRecord,
    getRecordsByPatientId,
    getRecordById,
    updateRecord,
    deleteRecord
};