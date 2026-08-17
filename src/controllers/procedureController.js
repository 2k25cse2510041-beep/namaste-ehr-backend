const procedureService = require("../services/procedureService");

const createProcedure = (req, res) => {
    const { patientId } = req.params;

    const {
        procedureName,
        procedureDate,
        performedBy,
        facility,
        indication,
        outcome,
        notes
    } = req.body;

    if (!procedureName || !procedureDate) {
        return res.status(400).json({
            success: false,
            message: "procedureName and procedureDate are required"
        });
    }

    const record = procedureService.createProcedure(
        patientId,
        {
            procedureName,
            procedureDate,
            performedBy,
            facility,
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

const getProceduresByPatientId = (req, res) => {
    const { patientId } = req.params;

    const records =
        procedureService.getProceduresByPatientId(patientId);

    res.status(200).json({
        success: true,
        count: records.length,
        data: records
    });
};

const getProcedureById = (req, res) => {
    const { patientId, procedureId } = req.params;

    const record =
        procedureService.getProcedureById(
            patientId,
            procedureId
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Procedure not found"
        });
    }

    res.status(200).json({
        success: true,
        data: record
    });
};

const updateProcedure = (req, res) => {
    const { patientId, procedureId } = req.params;

    const record =
        procedureService.updateProcedure(
            patientId,
            procedureId,
            req.body
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Procedure not found"
        });
    }

    res.status(200).json({
        success: true,
        data: record
    });
};

const deleteProcedure = (req, res) => {
    const { patientId, procedureId } = req.params;

    const record =
        procedureService.deleteProcedure(
            patientId,
            procedureId
        );

    if (!record) {
        return res.status(404).json({
            success: false,
            message: "Procedure not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Procedure deleted successfully",
        data: record
    });
};

module.exports = {
    createProcedure,
    getProceduresByPatientId,
    getProcedureById,
    updateProcedure,
    deleteProcedure
};