const express = require("express");

const {
    getDiagnosisSummary
} = require("../controllers/diagnosisSummaryController");

const router = express.Router();

router.get(
    "/:patientId/diagnosis-summary",
    getDiagnosisSummary
);

module.exports = router;