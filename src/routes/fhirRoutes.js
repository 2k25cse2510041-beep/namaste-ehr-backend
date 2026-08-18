const express = require("express");

const {
    generateFhirBundle
} = require("../controllers/fhirController");

const router = express.Router();

// Generate FHIR-style EHR Bundle for a patient
router.get(
    "/patient/:patientId",
    generateFhirBundle
);

module.exports = router;