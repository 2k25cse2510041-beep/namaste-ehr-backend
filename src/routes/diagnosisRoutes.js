const express = require("express");

const {
    createDiagnosis,
    getDiagnosesByPatientId,
    getDiagnosisById,
    updateDiagnosis,
    deleteDiagnosis
} = require("../controllers/diagnosisController");

const router = express.Router();

router.post("/:patientId/diagnoses", createDiagnosis);

router.get("/:patientId/diagnoses", getDiagnosesByPatientId);

router.get("/:patientId/diagnoses/:diagnosisId", getDiagnosisById);

router.put("/:patientId/diagnoses/:diagnosisId", updateDiagnosis);

router.delete("/:patientId/diagnoses/:diagnosisId", deleteDiagnosis);

module.exports = router;