let encounters = [];
let nextEncounterId = 1;

const createEncounter = (patientId, encounterData) => {
    const encounter = {
        id: nextEncounterId++,
        patientId: Number(patientId),
        ...encounterData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    encounters.push(encounter);

    return encounter;
};

const getEncountersByPatientId = (patientId) => {
    return encounters.filter(
        encounter => encounter.patientId === Number(patientId)
    );
};

const getEncounterById = (patientId, encounterId) => {
    return encounters.find(
        encounter =>
            encounter.patientId === Number(patientId) &&
            encounter.id === Number(encounterId)
    );
};

const updateEncounter = (patientId, encounterId, encounterData) => {
    const encounter = getEncounterById(patientId, encounterId);

    if (!encounter) {
        return null;
    }

    Object.assign(encounter, encounterData);
    encounter.updatedAt = new Date().toISOString();

    return encounter;
};

const deleteEncounter = (patientId, encounterId) => {
    const index = encounters.findIndex(
        encounter =>
            encounter.patientId === Number(patientId) &&
            encounter.id === Number(encounterId)
    );

    if (index === -1) {
        return null;
    }

    const deletedEncounter = encounters[index];

    encounters.splice(index, 1);

    return deletedEncounter;
};

module.exports = {
    createEncounter,
    getEncountersByPatientId,
    getEncounterById,
    updateEncounter,
    deleteEncounter
};