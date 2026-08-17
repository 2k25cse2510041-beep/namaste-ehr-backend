const express = require("express");

const {
    createDiagnosisHistory,
    getDiagnosisHistoryByPatientId,
    getDiagnosisHistoryById,
    updateDiagnosisHistory,
    deleteDiagnosisHistory
} = require("../controllers/diagnosisHistoryController");

const router = express.Router();

router.post(
    "/:patientId/diagnosis-history",
    createDiagnosisHistory
);

router.get(
    "/:patientId/diagnosis-history",
    getDiagnosisHistoryByPatientId
);

router.get(
    "/:patientId/diagnosis-history/:diagnosisHistoryId",
    getDiagnosisHistoryById
);

router.put(
    "/:patientId/diagnosis-history/:diagnosisHistoryId",
    updateDiagnosisHistory
);

router.delete(
    "/:patientId/diagnosis-history/:diagnosisHistoryId",
    deleteDiagnosisHistory
);

module.exports = router;