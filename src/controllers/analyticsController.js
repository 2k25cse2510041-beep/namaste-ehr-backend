const analyticsService = require("../services/analyticsService");


// =====================================================
// COMPLETE ANALYTICS
// =====================================================

const getAnalytics = (req, res) => {

    try {

        const analytics =
            analyticsService.getAnalytics();

        res.status(200).json({
            success: true,
            data: analytics
        });

    } catch (error) {

        console.error("Analytics Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to generate analytics"
        });
    }
};


// =====================================================
// EHR STATISTICS
// =====================================================

const getEhrStatistics = (req, res) => {

    try {

        const statistics =
            analyticsService.getEhrStatistics();

        res.status(200).json({
            success: true,
            data: statistics
        });

    } catch (error) {

        console.error("EHR Statistics Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to generate EHR statistics"
        });
    }
};


// =====================================================
// MAPPING STATISTICS
// =====================================================

const getMappingStatistics = (req, res) => {

    try {

        const statistics =
            analyticsService.getMappingStatistics();

        res.status(200).json({
            success: true,
            data: statistics
        });

    } catch (error) {

        console.error("Mapping Statistics Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to generate mapping statistics"
        });
    }
};


// =====================================================
// TERMINOLOGY USAGE
// =====================================================

const getTerminologyUsage = (req, res) => {

    try {

        const usage =
            analyticsService.getTerminologyUsage();

        res.status(200).json({
            success: true,
            data: usage
        });

    } catch (error) {

        console.error("Terminology Usage Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to generate terminology usage"
        });
    }
};


module.exports = {
    getAnalytics,
    getEhrStatistics,
    getMappingStatistics,
    getTerminologyUsage
};