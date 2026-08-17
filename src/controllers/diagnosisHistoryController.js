const diagnosisHistoryService = require("../services/diagnosisHistoryService");

const createDiagnosisHistory = (req, res) => {
    const { patientId } = req.params;

    const {
        diagnosisName,
        diagnosisCode,
        diagnosisDate,
        diagnosedBy,
        status,
        severity,
        notes
    } = req.body;

    if (!diagnosisName || !diagnosisDate) {
        return res.status(400).json({
            success: false,
            message: "diagnosisName and diagnosisDate are required"
        });
    }

    const record = diagnosisHistoryService.createDiagnosisHistory(
        patientId,
        {
            diagnosisName,
            diagnosisCode,
            diagnosisDate,
            diagnosedBy,
            status,
            severity,
            notes
        }
    );

    res.status(201).json({
        success: true,
        data: record
    });
};

const getDiagnosisHistoryByPatientId = (req, res) => {
    const { patientId } = req.params;

    const records =
        diagnosisHistoryService.getDiagnosisHistoryByPatientId(
            patientId
        );

    res.status(200).json({
        success: true,
        count: records.length,
        data: records
    });
};

const getDiagnosisHistoryById = (req, res) => {
    const { patientId, diagnosisHistoryId } = req.params;

    const record =
        diagnosisHistoryService.getDiagnosisHistoryById(
            patientId,
            diagnosisHistoryId
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Diagnosis history record not found"
        });
    }

    res.status(200).json({
        success: true,
        data: record
    });
};

const updateDiagnosisHistory = (req, res) => {
    const { patientId, diagnosisHistoryId } = req.params;

    const record =
        diagnosisHistoryService.updateDiagnosisHistory(
            patientId,
            diagnosisHistoryId,
            req.body
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Diagnosis history record not found"
        });
    }

    res.status(200).json({
        success: true,
        data: record
    });
};

const deleteDiagnosisHistory = (req, res) => {
    const { patientId, diagnosisHistoryId } = req.params;

    const record =
        diagnosisHistoryService.deleteDiagnosisHistory(
            patientId,
            diagnosisHistoryId
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Diagnosis history record not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Diagnosis history deleted successfully",
        data: record
    });
};

module.exports = {
    createDiagnosisHistory,
    getDiagnosisHistoryByPatientId,
    getDiagnosisHistoryById,
    updateDiagnosisHistory,
    deleteDiagnosisHistory
};