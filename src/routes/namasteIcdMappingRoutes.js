const express = require("express");

const {
    createMapping,
    getAllMappings,
    getMappingById,
    getMappingByNamasteCode,
    searchMappings,
    updateMapping,
    deleteMapping
} = require("../controllers/namasteIcdMappingController");

const router = express.Router();

// Search mappings
router.get("/search", searchMappings);

// Find mapping by NAMASTE code
router.get("/namaste/:namasteCode", getMappingByNamasteCode);

// Get all mappings
router.get("/", getAllMappings);

// Get mapping by ID
router.get("/:id", getMappingById);

// Create mapping
router.post("/", createMapping);

// Update mapping
router.put("/:id", updateMapping);

// Delete mapping
router.delete("/:id", deleteMapping);

module.exports = router;