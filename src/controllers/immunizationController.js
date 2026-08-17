const immunizationService = require("../services/immunizationService");

const createImmunization = (req, res) => {
    const { patientId } = req.params;

    const {
        vaccineName,
        doseNumber,
        vaccinationDate,
        nextDueDate,
        administeredBy,
        batchNumber,
        notes
    } = req.body;

    if (!vaccineName || !vaccinationDate) {
        return res.status(400).json({
            success: false,
            message: "vaccineName and vaccinationDate are required"
        });
    }

    const immunization = immunizationService.createImmunization(
        patientId,
        {
            vaccineName,
            doseNumber,
            vaccinationDate,
            nextDueDate,
            administeredBy,
            batchNumber,
            notes
        }
    );

    res.status(201).json({
        success: true,
        data: immunization
    });
};

const getImmunizationsByPatientId = (req, res) => {
    const { patientId } = req.params;

    const immunizations =
        immunizationService.getImmunizationsByPatientId(patientId);

    res.status(200).json({
        success: true,
        count: immunizations.length,
        data: immunizations
    });
};

const getImmunizationById = (req, res) => {
    const { patientId, immunizationId } = req.params;

    const immunization =
        immunizationService.getImmunizationById(
            patientId,
            immunizationId
        );

    if (!immunization) {
        return res.status(404).json({
            success: false,
            message: "Immunization not found"
        });
    }

    res.status(200).json({
        success: true,
        data: immunization
    });
};

const updateImmunization = (req, res) => {
    const { patientId, immunizationId } = req.params;

    const immunization =
        immunizationService.updateImmunization(
            patientId,
            immunizationId,
            req.body
        );

    if (!immunization) {
        return res.status(404).json({
            success: false,
            message: "Immunization not found"
        });
    }

    res.status(200).json({
        success: true,
        data: immunization
    });
};

const deleteImmunization = (req, res) => {
    const { patientId, immunizationId } = req.params;

    const immunization =
        immunizationService.deleteImmunization(
            patientId,
            immunizationId
        );

    if (!immunization) {
        return res.status(404).json({
            success: false,
            message: "Immunization not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Immunization deleted successfully",
        data: immunization
    });
};

module.exports = {
    createImmunization,
    getImmunizationsByPatientId,
    getImmunizationById,
    updateImmunization,
    deleteImmunization
};