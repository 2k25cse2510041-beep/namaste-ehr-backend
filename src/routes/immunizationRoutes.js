const express = require("express");

const {
    createImmunization,
    getImmunizationsByPatientId,
    getImmunizationById,
    updateImmunization,
    deleteImmunization
} = require("../controllers/immunizationController");

const router = express.Router();

router.post("/:patientId/immunizations", createImmunization);

router.get("/:patientId/immunizations", getImmunizationsByPatientId);

router.get(
    "/:patientId/immunizations/:immunizationId",
    getImmunizationById
);

router.put(
    "/:patientId/immunizations/:immunizationId",
    updateImmunization
);

router.delete(
    "/:patientId/immunizations/:immunizationId",
    deleteImmunization
);

module.exports = router;