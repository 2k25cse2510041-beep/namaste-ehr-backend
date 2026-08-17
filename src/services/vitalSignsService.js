let vitalSigns = [];
let nextVitalSignsId = 1;

const createVitalSigns = (patientId, vitalSignsData) => {
    const record = {
        id: nextVitalSignsId++,
        patientId: Number(patientId),
        ...vitalSignsData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    vitalSigns.push(record);

    return record;
};

const getVitalSignsByPatientId = (patientId) => {
    return vitalSigns.filter(
        record => record.patientId === Number(patientId)
    );
};

const getVitalSignsById = (patientId, vitalSignsId) => {
    return vitalSigns.find(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(vitalSignsId)
    );
};

const updateVitalSigns = (patientId, vitalSignsId, vitalSignsData) => {
    const record = getVitalSignsById(patientId, vitalSignsId);

    if (!record) {
        return null;
    }

    Object.assign(record, vitalSignsData);
    record.updatedAt = new Date().toISOString();

    return record;
};

const deleteVitalSigns = (patientId, vitalSignsId) => {
    const index = vitalSigns.findIndex(
        record =>
            record.patientId === Number(patientId) &&
            record.id === Number(vitalSignsId)
    );

    if (index === -1) {
        return null;
    }

    const deletedRecord = vitalSigns[index];

    vitalSigns.splice(index, 1);

    return deletedRecord;
};

module.exports = {
    createVitalSigns,
    getVitalSignsByPatientId,
    getVitalSignsById,
    updateVitalSigns,
    deleteVitalSigns
};