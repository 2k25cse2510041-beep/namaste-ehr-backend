const express = require("express");

const {
    createLabReport,
    getLabReportsByPatientId,
    getLabReportById,
    updateLabReport,
    deleteLabReport
} = require("../controllers/labReportController");

const router = express.Router();

router.post("/:patientId/lab-reports", createLabReport);

router.get("/:patientId/lab-reports", getLabReportsByPatientId);

router.get(
    "/:patientId/lab-reports/:reportId",
    getLabReportById
);

router.put(
    "/:patientId/lab-reports/:reportId",
    updateLabReport
);

router.delete(
    "/:patientId/lab-reports/:reportId",
    deleteLabReport
);

module.exports = router;