const express = require("express");

const {
    createClinicalNote,
    getClinicalNotesByPatientId,
    getClinicalNoteById,
    updateClinicalNote,
    deleteClinicalNote
} = require("../controllers/clinicalNoteController");

const router = express.Router();

router.post("/:patientId/clinical-notes", createClinicalNote);

router.get("/:patientId/clinical-notes", getClinicalNotesByPatientId);

router.get(
    "/:patientId/clinical-notes/:noteId",
    getClinicalNoteById
);

router.put(
    "/:patientId/clinical-notes/:noteId",
    updateClinicalNote
);

router.delete(
    "/:patientId/clinical-notes/:noteId",
    deleteClinicalNote
);

module.exports = router;