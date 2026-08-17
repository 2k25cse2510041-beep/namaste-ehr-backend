const medicationHistoryService = require("../services/medicationHistoryService");

const createMedicationHistory = (req, res) => {
    const { patientId } = req.params;

    const {
        medicationName,
        dosage,
        frequency,
        route,
        startDate,
        endDate,
        indication,
        prescribedBy,
        status,
        notes
    } = req.body;

    if (!medicationName || !startDate) {
        return res.status(400).json({
            success: false,
            message: "medicationName and startDate are required"
        });
    }

    const record = medicationHistoryService.createMedicationHistory(
        patientId,
        {
            medicationName,
            dosage,
            frequency,
            route,
            startDate,
            endDate,
            indication,
            prescribedBy,
            status,
            notes
        }
    );

    res.status(201).json({
        success: true,
        data: record
    });
};

const getMedicationHistoryByPatientId = (req, res) => {
    const { patientId } = req.params;

    const records =
        medicationHistoryService.getMedicationHistoryByPatientId(
            patientId
        );

    res.status(200).json({
        success: true,
        count: records.length,
        data: records
    });
};

const getMedicationHistoryById = (req, res) => {
    const { patientId, medicationId } = req.params;

    const record =
        medicationHistoryService.getMedicationHistoryById(
            patientId,
            medicationId
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Medication history record not found"
        });
    }

    res.status(200).json({
        success: true,
        data: record
    });
};

const updateMedicationHistory = (req, res) => {
    const { patientId, medicationId } = req.params;

    const record =
        medicationHistoryService.updateMedicationHistory(
            patientId,
            medicationId,
            req.body
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Medication history record not found"
        });
    }

    res.status(200).json({
        success: true,
        data: record
    });
};

const deleteMedicationHistory = (req, res) => {
    const { patientId, medicationId } = req.params;

    const record =
        medicationHistoryService.deleteMedicationHistory(
            patientId,
            medicationId
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Medication history record not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Medication history deleted successfully",
        data: record
    });
};

module.exports = {
    createMedicationHistory,
    getMedicationHistoryByPatientId,
    getMedicationHistoryById,
    updateMedicationHistory,
    deleteMedicationHistory
};