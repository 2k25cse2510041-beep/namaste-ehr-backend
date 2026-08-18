const express = require("express");

const {
    createTerminology,
    getAllTerminology,
    getTerminologyById,
    searchTerminology,
    updateTerminology,
    deleteTerminology
} = require("../controllers/namasteTerminologyController");

const router = express.Router();

// Search terminology
router.get("/search", searchTerminology);

// Get all terminology
router.get("/", getAllTerminology);

// Get terminology by ID
router.get("/:id", getTerminologyById);

// Create terminology
router.post("/", createTerminology);

// Update terminology
router.put("/:id", updateTerminology);

// Delete terminology
router.delete("/:id", deleteTerminology);

module.exports = router;