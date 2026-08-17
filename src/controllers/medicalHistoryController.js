const medicalHistoryService = require("../services/medicalHistoryService");

const createMedicalHistory = (req, res) => {
    const { patientId } = req.params;

    const {
        condition,
        description,
        diagnosisDate,
        status,
        notes
    } = req.body;

    if (!condition || !description || !diagnosisDate || !status) {
        return res.status(400).json({
            success: false,
            message: "condition, description, diagnosisDate and status are required"
        });
    }

    const history = medicalHistoryService.createMedicalHistory(
        patientId,
        {
            condition,
            description,
            diagnosisDate,
            status,
            notes
        }
    );

    res.status(201).json({
        success: true,
        data: history
    });
};

const getMedicalHistoriesByPatientId = (req, res) => {
    const { patientId } = req.params;

    const histories =
        medicalHistoryService.getMedicalHistoriesByPatientId(patientId);

    res.status(200).json({
        success: true,
        count: histories.length,
        data: histories
    });
};

const getMedicalHistoryById = (req, res) => {
    const { patientId, historyId } = req.params;

    const history = medicalHistoryService.getMedicalHistoryById(
        patientId,
        historyId
    );

    if (!history) {
        return res.status(404).json({
            success: false,
            message: "Medical history not found"
        });
    }

    res.status(200).json({
        success: true,
        data: history
    });
};

const updateMedicalHistory = (req, res) => {
    const { patientId, historyId } = req.params;

    const history = medicalHistoryService.updateMedicalHistory(
        patientId,
        historyId,
        req.body
    );

    if (!history) {
        return res.status(404).json({
            success: false,
            message: "Medical history not found"
        });
    }

    res.status(200).json({
        success: true,
        data: history
    });
};

const deleteMedicalHistory = (req, res) => {
    const { patientId, historyId } = req.params;

    const history = medicalHistoryService.deleteMedicalHistory(
        patientId,
        historyId
    );

    if (!history) {
        return res.status(404).json({
            success: false,
            message: "Medical history not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Medical history deleted successfully",
        data: history
    });
};

module.exports = {
    createMedicalHistory,
    getMedicalHistoriesByPatientId,
    getMedicalHistoryById,
    updateMedicalHistory,
    deleteMedicalHistory
};