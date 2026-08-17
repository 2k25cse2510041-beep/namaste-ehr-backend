const allergyService = require("../services/allergyService");

const createAllergy = (req, res) => {
    const { patientId } = req.params;

    const {
        allergen,
        reaction,
        severity,
        status,
        notes
    } = req.body;

    if (!allergen || !reaction || !severity || !status) {
        return res.status(400).json({
            success: false,
            message: "allergen, reaction, severity and status are required"
        });
    }

    const allergy = allergyService.createAllergy(
        patientId,
        {
            allergen,
            reaction,
            severity,
            status,
            notes
        }
    );

    res.status(201).json({
        success: true,
        data: allergy
    });
};

const getAllergiesByPatientId = (req, res) => {
    const { patientId } = req.params;

    const allergies =
        allergyService.getAllergiesByPatientId(patientId);

    res.status(200).json({
        success: true,
        count: allergies.length,
        data: allergies
    });
};

const getAllergyById = (req, res) => {
    const { patientId, allergyId } = req.params;

    const allergy = allergyService.getAllergyById(
        patientId,
        allergyId
    );

    if (!allergy) {
        return res.status(404).json({
            success: false,
            message: "Allergy not found"
        });
    }

    res.status(200).json({
        success: true,
        data: allergy
    });
};

const updateAllergy = (req, res) => {
    const { patientId, allergyId } = req.params;

    const allergy = allergyService.updateAllergy(
        patientId,
        allergyId,
        req.body
    );

    if (!allergy) {
        return res.status(404).json({
            success: false,
            message: "Allergy not found"
        });
    }

    res.status(200).json({
        success: true,
        data: allergy
    });
};

const deleteAllergy = (req, res) => {
    const { patientId, allergyId } = req.params;

    const allergy = allergyService.deleteAllergy(
        patientId,
        allergyId
    );

    if (!allergy) {
        return res.status(404).json({
            success: false,
            message: "Allergy not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Allergy deleted successfully",
        data: allergy
    });
};

module.exports = {
    createAllergy,
    getAllergiesByPatientId,
    getAllergyById,
    updateAllergy,
    deleteAllergy
};