const socialHistoryService = require("../services/socialHistoryService");

const createSocialHistory = (req, res) => {
    const { patientId } = req.params;

    const {
        smokingStatus,
        alcoholUse,
        occupation,
        maritalStatus,
        exerciseFrequency,
        diet,
        notes
    } = req.body;

    if (!smokingStatus || !alcoholUse) {
        return res.status(400).json({
            success: false,
            message: "smokingStatus and alcoholUse are required"
        });
    }

    const record = socialHistoryService.createSocialHistory(
        patientId,
        {
            smokingStatus,
            alcoholUse,
            occupation,
            maritalStatus,
            exerciseFrequency,
            diet,
            notes
        }
    );

    res.status(201).json({
        success: true,
        data: record
    });
};

const getSocialHistoryByPatientId = (req, res) => {
    const { patientId } = req.params;

    const records =
        socialHistoryService.getSocialHistoryByPatientId(patientId);

    res.status(200).json({
        success: true,
        count: records.length,
        data: records
    });
};

const getSocialHistoryById = (req, res) => {
    const { patientId, historyId } = req.params;

    const record =
        socialHistoryService.getSocialHistoryById(
            patientId,
            historyId
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Social history record not found"
        });
    }

    res.status(200).json({
        success: true,
        data: record
    });
};

const updateSocialHistory = (req, res) => {
    const { patientId, historyId } = req.params;

    const record =
        socialHistoryService.updateSocialHistory(
            patientId,
            historyId,
            req.body
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Social history record not found"
        });
    }

    res.status(200).json({
        success: true,
        data: record
    });
};

const deleteSocialHistory = (req, res) => {
    const { patientId, historyId } = req.params;

    const record =
        socialHistoryService.deleteSocialHistory(
            patientId,
            historyId
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Social history record not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Social history deleted successfully",
        data: record
    });
};

module.exports = {
    createSocialHistory,
    getSocialHistoryByPatientId,
    getSocialHistoryById,
    updateSocialHistory,
    deleteSocialHistory
};