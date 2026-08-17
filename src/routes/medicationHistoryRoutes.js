const express = require("express");

const {
    createMedicationHistory,
    getMedicationHistoryByPatientId,
    getMedicationHistoryById,
    updateMedicationHistory,
    deleteMedicationHistory
} = require("../controllers/medicationHistoryController");

const router = express.Router();

router.post(
    "/:patientId/medication-history",
    createMedicationHistory
);

router.get(
    "/:patientId/medication-history",
    getMedicationHistoryByPatientId
);

router.get(
    "/:patientId/medication-history/:medicationId",
    getMedicationHistoryById
);

router.put(
    "/:patientId/medication-history/:medicationId",
    updateMedicationHistory
);

router.delete(
    "/:patientId/medication-history/:medicationId",
    deleteMedicationHistory
);

module.exports = router;