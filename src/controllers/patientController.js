const patientService = require("../services/patientService");

const createPatient = (req, res) => {
    const { name, dateOfBirth, gender, phone, email } = req.body;

    if (!name || !dateOfBirth || !gender) {
        return res.status(400).json({
            success: false,
            message: "name, dateOfBirth and gender are required"
        });
    }

    const patient = patientService.createPatient({
        name,
        dateOfBirth,
        gender,
        phone,
        email
    });

    res.status(201).json({
        success: true,
        data: patient
    });
};

const getAllPatients = (req, res) => {
    const patients = patientService.getAllPatients();

    res.status(200).json({
        success: true,
        count: patients.length,
        data: patients
    });
};

const getPatientById = (req, res) => {
    const patient = patientService.getPatientById(req.params.id);

    if (!patient) {
        return res.status(404).json({
            success: false,
            message: "Patient not found"
        });
    }

    res.status(200).json({
        success: true,
        data: patient
    });
};

const updatePatient = (req, res) => {
    const patient = patientService.updatePatient(
        req.params.id,
        req.body
    );

    if (!patient) {
        return res.status(404).json({
            success: false,
            message: "Patient not found"
        });
    }

    res.status(200).json({
        success: true,
        data: patient
    });
};

const deletePatient = (req, res) => {
    const patient = patientService.deletePatient(req.params.id);

    if (!patient) {
        return res.status(404).json({
            success: false,
            message: "Patient not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Patient deleted successfully",
        data: patient
    });
};

module.exports = {
    createPatient,
    getAllPatients,
    getPatientById,
    updatePatient,
    deletePatient
};