let patients = [];
let nextId = 1;

const createPatient = (patientData) => {
    const patient = {
        id: nextId++,
        ...patientData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    patients.push(patient);
    return patient;
};

const getAllPatients = () => {
    return patients;
};

const getPatientById = (id) => {
    return patients.find(patient => patient.id === Number(id));
};

const updatePatient = (id, patientData) => {
    const patient = patients.find(patient => patient.id === Number(id));

    if (!patient) {
        return null;
    }

    Object.assign(patient, patientData);
    patient.updatedAt = new Date().toISOString();

    return patient;
};

const deletePatient = (id) => {
    const index = patients.findIndex(patient => patient.id === Number(id));

    if (index === -1) {
        return null;
    }

    const deletedPatient = patients[index];
    patients.splice(index, 1);

    return deletedPatient;
};

module.exports = {
    createPatient,
    getAllPatients,
    getPatientById,
    updatePatient,
    deletePatient
};