const express = require("express");

const {
    createPrescription,
    getPrescriptionsByPatientId,
    getPrescriptionById,
    updatePrescription,
    deletePrescription
} = require("../controllers/prescriptionController");

const router = express.Router();

router.post("/:patientId/prescriptions", createPrescription);

router.get("/:patientId/prescriptions", getPrescriptionsByPatientId);

router.get(
    "/:patientId/prescriptions/:prescriptionId",
    getPrescriptionById
);

router.put(
    "/:patientId/prescriptions/:prescriptionId",
    updatePrescription
);

router.delete(
    "/:patientId/prescriptions/:prescriptionId",
    deletePrescription
);

module.exports = router;