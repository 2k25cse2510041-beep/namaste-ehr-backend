const express = require("express");

const {
    createMedicalHistory,
    getMedicalHistoriesByPatientId,
    getMedicalHistoryById,
    updateMedicalHistory,
    deleteMedicalHistory
} = require("../controllers/medicalHistoryController");

const router = express.Router();

router.post("/:patientId/medical-history", createMedicalHistory);

router.get("/:patientId/medical-history", getMedicalHistoriesByPatientId);

router.get(
    "/:patientId/medical-history/:historyId",
    getMedicalHistoryById
);

router.put(
    "/:patientId/medical-history/:historyId",
    updateMedicalHistory
);

router.delete(
    "/:patientId/medical-history/:historyId",
    deleteMedicalHistory
);

module.exports = router;