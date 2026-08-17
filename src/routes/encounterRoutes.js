const express = require("express");

const {
    createEncounter,
    getEncountersByPatientId,
    getEncounterById,
    updateEncounter,
    deleteEncounter
} = require("../controllers/encounterController");

const router = express.Router();

router.post("/:patientId/encounters", createEncounter);

router.get("/:patientId/encounters", getEncountersByPatientId);

router.get("/:patientId/encounters/:encounterId", getEncounterById);

router.put("/:patientId/encounters/:encounterId", updateEncounter);

router.delete("/:patientId/encounters/:encounterId", deleteEncounter);

module.exports = router;