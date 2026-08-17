const express = require("express");

const {
    createVitalSigns,
    getVitalSignsByPatientId,
    getVitalSignsById,
    updateVitalSigns,
    deleteVitalSigns
} = require("../controllers/vitalSignsController");

const router = express.Router();

router.post("/:patientId/vital-signs", createVitalSigns);

router.get("/:patientId/vital-signs", getVitalSignsByPatientId);

router.get(
    "/:patientId/vital-signs/:vitalSignsId",
    getVitalSignsById
);

router.put(
    "/:patientId/vital-signs/:vitalSignsId",
    updateVitalSigns
);

router.delete(
    "/:patientId/vital-signs/:vitalSignsId",
    deleteVitalSigns
);

module.exports = router;