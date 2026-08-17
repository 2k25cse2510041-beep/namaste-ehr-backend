const patientRecordService = require("../services/patientRecordService");

const createRecord = (req, res) => {
    const { patientId } = req.params;
    const { type, description, date, notes } = req.body;

    if (!type || !description || !date) {
        return res.status(400).json({
            success: false,
            message: "type, description and date are required"
        });
    }

    const record = patientRecordService.createRecord(patientId, {
        type,
        description,
        date,
        notes
    });

    res.status(201).json({
        success: true,
        data: record
    });
};

const getRecordsByPatientId = (req, res) => {
    const { patientId } = req.params;

    const records = patientRecordService.getRecordsByPatientId(patientId);

    res.status(200).json({
        success: true,
        count: records.length,
        data: records
    });
};

const getRecordById = (req, res) => {
    const { patientId, recordId } = req.params;

    const record = patientRecordService.getRecordById(
        patientId,
        recordId
    );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Patient record not found"
        });
    }

    res.status(200).json({
        success: true,
        data: record
    });
};

const updateRecord = (req, res) => {
    const { patientId, recordId } = req.params;

    const record = patientRecordService.updateRecord(
        patientId,
        recordId,
        req.body
    );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Patient record not found"
        });
    }

    res.status(200).json({
        success: true,
        data: record
    });
};

const deleteRecord = (req, res) => {
    const { patientId, recordId } = req.params;

    const record = patientRecordService.deleteRecord(
        patientId,
        recordId
    );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Patient record not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Patient record deleted successfully",
        data: record
    });
};

module.exports = {
    createRecord,
    getRecordsByPatientId,
    getRecordById,
    updateRecord,
    deleteRecord
};