const dashboardService = require("../services/dashboardService");

const getDashboardStats = (req, res) => {
    try {
        const stats = dashboardService.getDashboardStats();

        res.status(200).json({
            success: true,
            data: stats
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to load dashboard statistics",
            error: error.message
        });
    }
};

module.exports = {
    getDashboardStats
};