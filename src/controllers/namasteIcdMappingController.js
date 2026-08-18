const namasteIcdMappingService = require("../services/namasteIcdMappingService");

// Create mapping
const createMapping = (req, res) => {
    const mapping = namasteIcdMappingService.createMapping(req.body);

    res.status(201).json({
        success: true,
        data: mapping
    });
};

// Get all mappings
const getAllMappings = (req, res) => {
    const mappings = namasteIcdMappingService.getAllMappings();

    res.status(200).json({
        success: true,
        count: mappings.length,
        data: mappings
    });
};

// Get mapping by ID
const getMappingById = (req, res) => {
    const mapping =
        namasteIcdMappingService.getMappingById(req.params.id);

    if (!mapping) {
        return res.status(404).json({
            success: false,
            message: "NAMASTE-ICD mapping not found"
        });
    }

    res.status(200).json({
        success: true,
        data: mapping
    });
};

// Get mappings by NAMASTE code
const getMappingByNamasteCode = (req, res) => {
    const { namasteCode } = req.params;

    const mappings =
        namasteIcdMappingService.getMappingByNamasteCode(namasteCode);

    res.status(200).json({
        success: true,
        count: mappings.length,
        data: mappings
    });
};

// Search mappings
const searchMappings = (req, res) => {
    const { q } = req.query;

    if (!q) {
        return res.status(400).json({
            success: false,
            message: "Search query is required"
        });
    }

    const mappings =
        namasteIcdMappingService.searchMappings(q);

    res.status(200).json({
        success: true,
        count: mappings.length,
        data: mappings
    });
};

// Update mapping
const updateMapping = (req, res) => {
    const mapping =
        namasteIcdMappingService.updateMapping(
            req.params.id,
            req.body
        );

    if (!mapping) {
        return res.status(404).json({
            success: false,
            message: "NAMASTE-ICD mapping not found"
        });
    }

    res.status(200).json({
        success: true,
        data: mapping
    });
};

// Delete mapping
const deleteMapping = (req, res) => {
    const mapping =
        namasteIcdMappingService.deleteMapping(req.params.id);

    if (!mapping) {
        return res.status(404).json({
            success: false,
            message: "NAMASTE-ICD mapping not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "NAMASTE-ICD mapping deleted successfully",
        data: mapping
    });
};

module.exports = {
    createMapping,
    getAllMappings,
    getMappingById,
    getMappingByNamasteCode,
    searchMappings,
    updateMapping,
    deleteMapping
};