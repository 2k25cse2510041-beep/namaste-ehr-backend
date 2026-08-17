let medicationHistoryRecords = [];
let nextMedicationHistoryId = 1;

const createMedicationHistory = (patientId, medicationData) => {
    const record = {
        id: nextMedicationHistoryId++,
        patientId: Number(patientId),
        ...medicationData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    medicationHistoryRecords.push(record);

    return record;
};

const getMedicationHistoryByPatientId = (patientId) => {
    return medicationHistoryRecords.filter(
        record => record.patientId === Number(patientId)
    );
};

const getMedicationHistoryById = (patientId, medicationId) => {
    return medicationHistoryRecords.find(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(medicationId)
    );
};

const updateMedicationHistory = (
    patientId,
    medicationId,
    medicationData
) => {
    const record = getMedicationHistoryById(
        patientId,
        medicationId
    );

    if (!record) {
        return null;
    }

    Object.assign(record, medicationData);
    record.updatedAt = new Date().toISOString();

    return record;
};

const deleteMedicationHistory = (patientId, medicationId) => {
    const index = medicationHistoryRecords.findIndex(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(medicationId)
    );

    if (index === -1) {
        return null;
    }

    const deletedRecord = medicationHistoryRecords[index];

    medicationHistoryRecords.splice(index, 1);

    return deletedRecord;
};

module.exports = {
    createMedicationHistory,
    getMedicationHistoryByPatientId,
    getMedicationHistoryById,
    updateMedicationHistory,
    deleteMedicationHistory
};