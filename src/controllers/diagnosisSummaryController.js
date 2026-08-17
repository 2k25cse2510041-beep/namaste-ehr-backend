const diagnosisSummaryService = require("../services/diagnosisSummaryService");

const getDiagnosisSummary = (req, res) => {
    const { patientId } = req.params;

    const summary =
        diagnosisSummaryService.getDiagnosisSummary(patientId);

    res.status(200).json({
        success: true,
        data: summary
    });
};

module.exports = {
    getDiagnosisSummary
};