let immunizations = [];
let nextImmunizationId = 1;

const createImmunization = (patientId, immunizationData) => {
    const immunization = {
        id: nextImmunizationId++,
        patientId: Number(patientId),
        ...immunizationData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    immunizations.push(immunization);

    return immunization;
};

const getImmunizationsByPatientId = (patientId) => {
    return immunizations.filter(
        immunization => immunization.patientId === Number(patientId)
    );
};

const getImmunizationById = (patientId, immunizationId) => {
    return immunizations.find(
        immunization =>
            immunization.patientId === Number(patientId) &&
            immunization.id === Number(immunizationId)
    );
};

const updateImmunization = (
    patientId,
    immunizationId,
    immunizationData
) => {
    const immunization = getImmunizationById(
        patientId,
        immunizationId
    );

    if (!immunization) {
        return null;
    }

    Object.assign(immunization, immunizationData);
    immunization.updatedAt = new Date().toISOString();

    return immunization;
};

const deleteImmunization = (patientId, immunizationId) => {
    const index = immunizations.findIndex(
        immunization =>
            immunization.patientId === Number(patientId) &&
            immunization.id === Number(immunizationId)
    );

    if (index === -1) {
        return null;
    }

    const deletedImmunization = immunizations[index];

    immunizations.splice(index, 1);

    return deletedImmunization;
};

module.exports = {
    createImmunization,
    getImmunizationsByPatientId,
    getImmunizationById,
    updateImmunization,
    deleteImmunization
};