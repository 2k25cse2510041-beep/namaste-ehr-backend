const labReportService = require("../services/labReportService");

const createLabReport = (req, res) => {
    const { patientId } = req.params;

    const {
        testName,
        testDate,
        result,
        unit,
        referenceRange,
        status,
        laboratory,
        notes
    } = req.body;

    if (!testName || !testDate || !result) {
        return res.status(400).json({
            success: false,
            message: "testName, testDate and result are required"
        });
    }

    const report = labReportService.createLabReport(
        patientId,
        {
            testName,
            testDate,
            result,
            unit,
            referenceRange,
            status,
            laboratory,
            notes
        }
    );

    res.status(201).json({
        success: true,
        data: report
    });
};

const getLabReportsByPatientId = (req, res) => {
    const { patientId } = req.params;

    const reports =
        labReportService.getLabReportsByPatientId(patientId);

    res.status(200).json({
        success: true,
        count: reports.length,
        data: reports
    });
};

const getLabReportById = (req, res) => {
    const { patientId, reportId } = req.params;

    const report = labReportService.getLabReportById(
        patientId,
        reportId
    );

    if (!report) {
        return res.status(404).json({
            success: false,
            message: "Lab report not found"
        });
    }

    res.status(200).json({
        success: true,
        data: report
    });
};

const updateLabReport = (req, res) => {
    const { patientId, reportId } = req.params;

    const report = labReportService.updateLabReport(
        patientId,
        reportId,
        req.body
    );

    if (!report) {
        return res.status(404).json({
            success: false,
            message: "Lab report not found"
        });
    }

    res.status(200).json({
        success: true,
        data: report
    });
};

const deleteLabReport = (req, res) => {
    const { patientId, reportId } = req.params;

    const report = labReportService.deleteLabReport(
        patientId,
        reportId
    );

    if (!report) {
        return res.status(404).json({
            success: false,
            message: "Lab report not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Lab report deleted successfully",
        data: report
    });
};

module.exports = {
    createLabReport,
    getLabReportsByPatientId,
    getLabReportById,
    updateLabReport,
    deleteLabReport
};