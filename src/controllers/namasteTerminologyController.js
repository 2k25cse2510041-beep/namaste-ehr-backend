const namasteTerminologyService = require("../services/namasteTerminologyService");

// Create terminology
const createTerminology = (req, res) => {
    const terminology = namasteTerminologyService.createTerminology(req.body);

    res.status(201).json({
        success: true,
        data: terminology
    });
};

// Get all terminology
const getAllTerminology = (req, res) => {
    const terminology = namasteTerminologyService.getAllTerminology();

    res.status(200).json({
        success: true,
        count: terminology.length,
        data: terminology
    });
};

// Get terminology by ID
const getTerminologyById = (req, res) => {
    const terminology =
        namasteTerminologyService.getTerminologyById(req.params.id);

    if (!terminology) {
        return res.status(404).json({
            success: false,
            message: "Terminology not found"
        });
    }

    res.status(200).json({
        success: true,
        data: terminology
    });
};

// Search terminology
const searchTerminology = (req, res) => {
    const { q } = req.query;

    if (!q) {
        return res.status(400).json({
            success: false,
            message: "Search query is required"
        });
    }

    const results =
        namasteTerminologyService.searchTerminology(q);

    res.status(200).json({
        success: true,
        count: results.length,
        data: results
    });
};

// Update terminology
const updateTerminology = (req, res) => {
    const terminology =
        namasteTerminologyService.updateTerminology(
            req.params.id,
            req.body
        );

    if (!terminology) {
        return res.status(404).json({
            success: false,
            message: "Terminology not found"
        });
    }

    res.status(200).json({
        success: true,
        data: terminology
    });
};

// Delete terminology
const deleteTerminology = (req, res) => {
    const terminology =
        namasteTerminologyService.deleteTerminology(req.params.id);

    if (!terminology) {
        return res.status(404).json({
            success: false,
            message: "Terminology not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Terminology deleted successfully",
        data: terminology
    });
};

module.exports = {
    createTerminology,
    getAllTerminology,
    getTerminologyById,
    searchTerminology,
    updateTerminology,
    deleteTerminology
};