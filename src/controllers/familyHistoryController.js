const familyHistoryService = require("../services/familyHistoryService");

const createFamilyHistory = (req, res) => {
    const { patientId } = req.params;

    const {
        relationship,
        condition,
        ageOfOnset,
        status,
        notes
    } = req.body;

    if (!relationship || !condition) {
        return res.status(400).json({
            success: false,
            message: "relationship and condition are required"
        });
    }

    const record = familyHistoryService.createFamilyHistory(
        patientId,
        {
            relationship,
            condition,
            ageOfOnset,
            status,
            notes
        }
    );

    res.status(201).json({
        success: true,
        data: record
    });
};

const getFamilyHistoryByPatientId = (req, res) => {
    const { patientId } = req.params;

    const records =
        familyHistoryService.getFamilyHistoryByPatientId(patientId);

    res.status(200).json({
        success: true,
        count: records.length,
        data: records
    });
};

const getFamilyHistoryById = (req, res) => {
    const { patientId, historyId } = req.params;

    const record =
        familyHistoryService.getFamilyHistoryById(
            patientId,
            historyId
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Family history record not found"
        });
    }

    res.status(200).json({
        success: true,
        data: record
    });
};

const updateFamilyHistory = (req, res) => {
    const { patientId, historyId } = req.params;

    const record =
        familyHistoryService.updateFamilyHistory(
            patientId,
            historyId,
            req.body
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Family history record not found"
        });
    }

    res.status(200).json({
        success: true,
        data: record
    });
};

const deleteFamilyHistory = (req, res) => {
    const { patientId, historyId } = req.params;

    const record =
        familyHistoryService.deleteFamilyHistory(
            patientId,
            historyId
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Family history record not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Family history deleted successfully",
        data: record
    });
};

module.exports = {
    createFamilyHistory,
    getFamilyHistoryByPatientId,
    getFamilyHistoryById,
    updateFamilyHistory,
    deleteFamilyHistory
};