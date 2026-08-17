let labReports = [];
let nextLabReportId = 1;

const createLabReport = (patientId, reportData) => {
    const report = {
        id: nextLabReportId++,
        patientId: Number(patientId),
        ...reportData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    labReports.push(report);

    return report;
};

const getLabReportsByPatientId = (patientId) => {
    return labReports.filter(
        report => report.patientId === Number(patientId)
    );
};

const getLabReportById = (patientId, reportId) => {
    return labReports.find(
        report =>
            report.patientId === Number(patientId) &&
            report.id === Number(reportId)
    );
};

const updateLabReport = (patientId, reportId, reportData) => {
    const report = getLabReportById(patientId, reportId);

    if (!report) {
        return null;
    }

    Object.assign(report, reportData);
    report.updatedAt = new Date().toISOString();

    return report;
};

const deleteLabReport = (patientId, reportId) => {
    const index = labReports.findIndex(
        report =>
            report.patientId === Number(patientId) &&
            report.id === Number(reportId)
    );

    if (index === -1) {
        return null;
    }

    const deletedReport = labReports[index];

    labReports.splice(index, 1);

    return deletedReport;
};

module.exports = {
    createLabReport,
    getLabReportsByPatientId,
    getLabReportById,
    updateLabReport,
    deleteLabReport
};