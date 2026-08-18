const express = require("express");

const {
    generateStandardizedRecord
} = require("../controllers/interoperabilityController");

const router = express.Router();

// Generate standardized EHR representation
router.post(
    "/standardize",
    generateStandardizedRecord
);

module.exports = router;