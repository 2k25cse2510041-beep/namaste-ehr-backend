const prescriptionService = require("../services/prescriptionService");

const createPrescription = (req, res) => {
    const { patientId } = req.params;

    const {
        medicineName,
        dosage,
        frequency,
        duration,
        instructions
    } = req.body;

    if (!medicineName || !dosage || !frequency || !duration) {
        return res.status(400).json({
            success: false,
            message: "medicineName, dosage, frequency and duration are required"
        });
    }

    const prescription = prescriptionService.createPrescription(
        patientId,
        {
            medicineName,
            dosage,
            frequency,
            duration,
            instructions
        }
    );

    res.status(201).json({
        success: true,
        data: prescription
    });
};

const getPrescriptionsByPatientId = (req, res) => {
    const { patientId } = req.params;

    const prescriptions =
        prescriptionService.getPrescriptionsByPatientId(patientId);

    res.status(200).json({
        success: true,
        count: prescriptions.length,
        data: prescriptions
    });
};

const getPrescriptionById = (req, res) => {
    const { patientId, prescriptionId } = req.params;

    const prescription = prescriptionService.getPrescriptionById(
        patientId,
        prescriptionId
    );

    if (!prescription) {
        return res.status(404).json({
            success: false,
            message: "Prescription not found"
        });
    }

    res.status(200).json({
        success: true,
        data: prescription
    });
};

const updatePrescription = (req, res) => {
    const { patientId, prescriptionId } = req.params;

    const prescription = prescriptionService.updatePrescription(
        patientId,
        prescriptionId,
        req.body
    );

    if (!prescription) {
        return res.status(404).json({
            success: false,
            message: "Prescription not found"
        });
    }

    res.status(200).json({
        success: true,
        data: prescription
    });
};

const deletePrescription = (req, res) => {
    const { patientId, prescriptionId } = req.params;

    const prescription = prescriptionService.deletePrescription(
        patientId,
        prescriptionId
    );

    if (!prescription) {
        return res.status(404).json({
            success: false,
            message: "Prescription not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Prescription deleted successfully",
        data: prescription
    });
};

module.exports = {
    createPrescription,
    getPrescriptionsByPatientId,
    getPrescriptionById,
    updatePrescription,
    deletePrescription
};