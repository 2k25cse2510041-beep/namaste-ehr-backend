const express = require("express");

const {
    createSurgicalHistory,
    getSurgicalHistoryByPatientId,
    getSurgicalHistoryById,
    updateSurgicalHistory,
    deleteSurgicalHistory
} = require("../controllers/surgicalHistoryController");

const router = express.Router();

router.post("/:patientId/surgical-history", createSurgicalHistory);

router.get("/:patientId/surgical-history", getSurgicalHistoryByPatientId);

router.get(
    "/:patientId/surgical-history/:surgeryId",
    getSurgicalHistoryById
);

router.put(
    "/:patientId/surgical-history/:surgeryId",
    updateSurgicalHistory
);

router.delete(
    "/:patientId/surgical-history/:surgeryId",
    deleteSurgicalHistory
);

module.exports = router;