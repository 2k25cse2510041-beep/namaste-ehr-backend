let prescriptions = [];
let nextPrescriptionId = 1;

const createPrescription = (patientId, prescriptionData) => {
    const prescription = {
        id: nextPrescriptionId++,
        patientId: Number(patientId),
        ...prescriptionData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    prescriptions.push(prescription);

    return prescription;
};

const getPrescriptionsByPatientId = (patientId) => {
    return prescriptions.filter(
        prescription =>
            prescription.patientId === Number(patientId)
    );
};

const getPrescriptionById = (patientId, prescriptionId) => {
    return prescriptions.find(
        prescription =>
            prescription.patientId === Number(patientId) &&
            prescription.id === Number(prescriptionId)
    );
};

const updatePrescription = (
    patientId,
    prescriptionId,
    prescriptionData
) => {
    const prescription = getPrescriptionById(
        patientId,
        prescriptionId
    );

    if (!prescription) {
        return null;
    }

    Object.assign(prescription, prescriptionData);
    prescription.updatedAt = new Date().toISOString();

    return prescription;
};

const deletePrescription = (patientId, prescriptionId) => {
    const index = prescriptions.findIndex(
        prescription =>
            prescription.patientId === Number(patientId) &&
            prescription.id === Number(prescriptionId)
    );

    if (index === -1) {
        return null;
    }

    const deletedPrescription = prescriptions[index];

    prescriptions.splice(index, 1);

    return deletedPrescription;
};

module.exports = {
    createPrescription,
    getPrescriptionsByPatientId,
    getPrescriptionById,
    updatePrescription,
    deletePrescription
};