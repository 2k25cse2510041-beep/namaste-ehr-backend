const express = require("express");

const {
    getPatientClinicalSummary
} = require("../controllers/clinicalSummaryController");

const router = express.Router();

// Get unified clinical summary for a patient
router.get(
    "/:patientId",
    getPatientClinicalSummary
);

module.exports = router;

