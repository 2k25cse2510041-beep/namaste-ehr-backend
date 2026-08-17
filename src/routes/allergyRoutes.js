const express = require("express");

const {
    createAllergy,
    getAllergiesByPatientId,
    getAllergyById,
    updateAllergy,
    deleteAllergy
} = require("../controllers/allergyController");

const router = express.Router();

router.post("/:patientId/allergies", createAllergy);

router.get("/:patientId/allergies", getAllergiesByPatientId);

router.get(
    "/:patientId/allergies/:allergyId",
    getAllergyById
);

router.put(
    "/:patientId/allergies/:allergyId",
    updateAllergy
);

router.delete(
    "/:patientId/allergies/:allergyId",
    deleteAllergy
);

module.exports = router;