const surgicalHistoryService = require("../services/surgicalHistoryService");

const createSurgicalHistory = (req, res) => {
    const { patientId } = req.params;

    const {
        surgeryName,
        surgeryDate,
        surgeon,
        hospital,
        indication,
        outcome,
        notes
    } = req.body;

    if (!surgeryName || !surgeryDate) {
        return res.status(400).json({
            success: false,
            message: "surgeryName and surgeryDate are required"
        });
    }

    const record = surgicalHistoryService.createSurgicalHistory(
        patientId,
        {
            surgeryName,
            surgeryDate,
            surgeon,
            hospital,
            indication,
            outcome,
            notes
        }
    );

    res.status(201).json({
        success: true,
        data: record
    });
};

const getSurgicalHistoryByPatientId = (req, res) => {
    const { patientId } = req.params;

    const records =
        surgicalHistoryService.getSurgicalHistoryByPatientId(patientId);

    res.status(200).json({
        success: true,
        count: records.length,
        data: records
    });
};

const getSurgicalHistoryById = (req, res) => {
    const { patientId, surgeryId } = req.params;

    const record =
        surgicalHistoryService.getSurgicalHistoryById(
            patientId,
            surgeryId
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Surgical history record not found"
        });
    }

    res.status(200).json({
        success: true,
        data: record
    });
};

const updateSurgicalHistory = (req, res) => {
    const { patientId, surgeryId } = req.params;

    const record =
        surgicalHistoryService.updateSurgicalHistory(
            patientId,
            surgeryId,
            req.body
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Surgical history record not found"
        });
    }

    res.status(200).json({
        success: true,
        data: record
    });
};

const deleteSurgicalHistory = (req, res) => {
    const { patientId, surgeryId } = req.params;

    const record =
        surgicalHistoryService.deleteSurgicalHistory(
            patientId,
            surgeryId
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Surgical history record not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Surgical history deleted successfully",
        data: record
    });
};

module.exports = {
    createSurgicalHistory,
    getSurgicalHistoryByPatientId,
    getSurgicalHistoryById,
    updateSurgicalHistory,
    deleteSurgicalHistory
};