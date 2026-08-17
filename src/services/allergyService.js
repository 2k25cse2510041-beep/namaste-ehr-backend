let allergies = [];
let nextAllergyId = 1;

const createAllergy = (patientId, allergyData) => {
    const allergy = {
        id: nextAllergyId++,
        patientId: Number(patientId),
        ...allergyData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    allergies.push(allergy);

    return allergy;
};

const getAllergiesByPatientId = (patientId) => {
    return allergies.filter(
        allergy => allergy.patientId === Number(patientId)
    );
};

const getAllergyById = (patientId, allergyId) => {
    return allergies.find(
        allergy =>
            allergy.patientId === Number(patientId) &&
            allergy.id === Number(allergyId)
    );
};

const updateAllergy = (patientId, allergyId, allergyData) => {
    const allergy = getAllergyById(patientId, allergyId);

    if (!allergy) {
        return null;
    }

    Object.assign(allergy, allergyData);
    allergy.updatedAt = new Date().toISOString();

    return allergy;
};

const deleteAllergy = (patientId, allergyId) => {
    const index = allergies.findIndex(
        allergy =>
            allergy.patientId === Number(patientId) &&
            allergy.id === Number(allergyId)
    );

    if (index === -1) {
        return null;
    }

    const deletedAllergy = allergies[index];

    allergies.splice(index, 1);

    return deletedAllergy;
};

module.exports = {
    createAllergy,
    getAllergiesByPatientId,
    getAllergyById,
    updateAllergy,
    deleteAllergy
};