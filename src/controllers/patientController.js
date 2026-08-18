const patientService = require("../services/patientService");

// =====================================================
// CREATE PATIENT
// =====================================================

const createPatient = (req, res) => {
    try {
        const { name, dateOfBirth, gender, phone, email } = req.body || {};

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

        return res.status(201).json({
            success: true,
            data: patient
        });

    } catch (error) {
        console.error("CREATE PATIENT ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to create patient",
            error: error.message
        });
    }
};


// =====================================================
// GET ALL PATIENTS
// =====================================================

const getAllPatients = (req, res) => {
    try {
        const patients = patientService.getAllPatients();

        return res.status(200).json({
            success: true,
            count: patients.length,
            data: patients
        });

    } catch (error) {
        console.error("GET PATIENTS ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to get patients",
            error: error.message
        });
    }
};


// =====================================================
// GET PATIENT BY ID
// =====================================================

const getPatientById = (req, res) => {
    try {
        const patient = patientService.getPatientById(req.params.id);

        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Patient not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: patient
        });

    } catch (error) {
        console.error("GET PATIENT ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to get patient",
            error: error.message
        });
    }
};


// =====================================================
// UPDATE PATIENT
// =====================================================

const updatePatient = (req, res) => {
    try {
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

        return res.status(200).json({
            success: true,
            data: patient
        });

    } catch (error) {
        console.error("UPDATE PATIENT ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to update patient",
            error: error.message
        });
    }
};


// =====================================================
// DELETE PATIENT
// =====================================================

const deletePatient = (req, res) => {
    try {
        const patient = patientService.deletePatient(req.params.id);

        if (!patient) {
            return res.status(404).json({
                success: false,
                message: "Patient not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Patient deleted successfully",
            data: patient
        });

    } catch (error) {
        console.error("DELETE PATIENT ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to delete patient",
            error: error.message
        });
    }
};


module.exports = {
    createPatient,
    getAllPatients,
    getPatientById,
    updatePatient,
    deletePatient
};