const express = require("express");

const {
    getAnalytics,
    getEhrStatistics,
    getMappingStatistics,
    getTerminologyUsage
} = require("../controllers/analyticsController");

const router = express.Router();


// Complete analytics
router.get("/", getAnalytics);


// EHR statistics
router.get("/ehr", getEhrStatistics);


// NAMASTE ↔ ICD-11 mapping statistics
router.get("/mappings", getMappingStatistics);


// NAMASTE terminology usage
router.get("/terminology", getTerminologyUsage);


module.exports = router;