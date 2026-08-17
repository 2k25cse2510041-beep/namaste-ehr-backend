const express = require("express");

const {
    createRecord,
    getRecordsByPatientId,
    getRecordById,
    updateRecord,
    deleteRecord
} = require("../controllers/patientRecordController");

const router = express.Router();

router.post("/:patientId/records", createRecord);

router.get("/:patientId/records", getRecordsByPatientId);

router.get("/:patientId/records/:recordId", getRecordById);

router.put("/:patientId/records/:recordId", updateRecord);

router.delete("/:patientId/records/:recordId", deleteRecord);

module.exports = router;