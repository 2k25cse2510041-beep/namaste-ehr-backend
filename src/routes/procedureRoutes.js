const express = require("express");

const {
    createProcedure,
    getProceduresByPatientId,
    getProcedureById,
    updateProcedure,
    deleteProcedure
} = require("../controllers/procedureController");

const router = express.Router();

router.post(
    "/:patientId/procedures",
    createProcedure
);

router.get(
    "/:patientId/procedures",
    getProceduresByPatientId
);

router.get(
    "/:patientId/procedures/:procedureId",
    getProcedureById
);

router.put(
    "/:patientId/procedures/:procedureId",
    updateProcedure
);

router.delete(
    "/:patientId/procedures/:procedureId",
    deleteProcedure
);

module.exports = router;