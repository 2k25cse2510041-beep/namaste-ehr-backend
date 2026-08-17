let procedureRecords = [];
let nextProcedureId = 1;

const createProcedure = (patientId, procedureData) => {
    const record = {
        id: nextProcedureId++,
        patientId: Number(patientId),
        ...procedureData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    procedureRecords.push(record);

    return record;
};

const getProceduresByPatientId = (patientId) => {
    return procedureRecords.filter(
        record => record.patientId === Number(patientId)
    );
};

const getProcedureById = (patientId, procedureId) => {
    return procedureRecords.find(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(procedureId)
    );
};

const updateProcedure = (patientId, procedureId, procedureData) => {
    const record = getProcedureById(patientId, procedureId);

    if (!record) {
        return null;
    }

    Object.assign(record, procedureData);
    record.updatedAt = new Date().toISOString();

    return record;
};

const deleteProcedure = (patientId, procedureId) => {
    const index = procedureRecords.findIndex(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(procedureId)
    );

    if (index === -1) {
        return null;
    }

    const deletedRecord = procedureRecords[index];

    procedureRecords.splice(index, 1);

    return deletedRecord;
};

module.exports = {
    createProcedure,
    getProceduresByPatientId,
    getProcedureById,
    updateProcedure,
    deleteProcedure
};