const diagnosisService = require("../services/diagnosisService");

const createDiagnosis = (req, res) => {
    const { patientId } = req.params;
    const { diagnosis, description, date, notes } = req.body;

    if (!diagnosis || !description || !date) {
        return res.status(400).json({
            success: false,
            message: "diagnosis, description and date are required"
        });
    }

    const newDiagnosis = diagnosisService.createDiagnosis(patientId, {
        diagnosis,
        description,
        date,
        notes
    });

    res.status(201).json({
        success: true,
        data: newDiagnosis
    });
};

const getDiagnosesByPatientId = (req, res) => {
    const { patientId } = req.params;

    const diagnoses = diagnosisService.getDiagnosesByPatientId(patientId);

    res.status(200).json({
        success: true,
        count: diagnoses.length,
        data: diagnoses
    });
};

const getDiagnosisById = (req, res) => {
    const { patientId, diagnosisId } = req.params;

    const diagnosis = diagnosisService.getDiagnosisById(
        patientId,
        diagnosisId
    );

    if (!diagnosis) {
        return res.status(404).json({
            success: false,
            message: "Diagnosis not found"
        });
    }

    res.status(200).json({
        success: true,
        data: diagnosis
    });
};

const updateDiagnosis = (req, res) => {
    const { patientId, diagnosisId } = req.params;

    const diagnosis = diagnosisService.updateDiagnosis(
        patientId,
        diagnosisId,
        req.body
    );

    if (!diagnosis) {
        return res.status(404).json({
            success: false,
            message: "Diagnosis not found"
        });
    }

    res.status(200).json({
        success: true,
        data: diagnosis
    });
};

const deleteDiagnosis = (req, res) => {
    const { patientId, diagnosisId } = req.params;

    const diagnosis = diagnosisService.deleteDiagnosis(
        patientId,
        diagnosisId
    );

    if (!diagnosis) {
        return res.status(404).json({
            success: false,
            message: "Diagnosis not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Diagnosis deleted successfully",
        data: diagnosis
    });
};

module.exports = {
    createDiagnosis,
    getDiagnosesByPatientId,
    getDiagnosisById,
    updateDiagnosis,
    deleteDiagnosis
};