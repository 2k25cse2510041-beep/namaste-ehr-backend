const express = require("express");

const {
    createFamilyHistory,
    getFamilyHistoryByPatientId,
    getFamilyHistoryById,
    updateFamilyHistory,
    deleteFamilyHistory
} = require("../controllers/familyHistoryController");

const router = express.Router();

router.post("/:patientId/family-history", createFamilyHistory);

router.get("/:patientId/family-history", getFamilyHistoryByPatientId);

router.get(
    "/:patientId/family-history/:historyId",
    getFamilyHistoryById
);

router.put(
    "/:patientId/family-history/:historyId",
    updateFamilyHistory
);

router.delete(
    "/:patientId/family-history/:historyId",
    deleteFamilyHistory
);

module.exports = router;