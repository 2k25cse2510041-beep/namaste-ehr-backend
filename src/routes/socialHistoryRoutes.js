const express = require("express");

const {
    createSocialHistory,
    getSocialHistoryByPatientId,
    getSocialHistoryById,
    updateSocialHistory,
    deleteSocialHistory
} = require("../controllers/socialHistoryController");

const router = express.Router();

router.post("/:patientId/social-history", createSocialHistory);

router.get("/:patientId/social-history", getSocialHistoryByPatientId);

router.get(
    "/:patientId/social-history/:historyId",
    getSocialHistoryById
);

router.put(
    "/:patientId/social-history/:historyId",
    updateSocialHistory
);

router.delete(
    "/:patientId/social-history/:historyId",
    deleteSocialHistory
);

module.exports = router;