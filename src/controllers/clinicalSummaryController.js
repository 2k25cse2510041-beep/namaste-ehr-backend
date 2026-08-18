const clinicalSummaryService = require("../services/clinicalSummaryService");

// Get unified clinical summary for a patient
const getPatientClinicalSummary = (req, res) => {
    try {
        const patientId = Number(req.params.patientId);

        // Validate patient ID
        if (!Number.isInteger(patientId) || patientId <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid patient ID"
            });
        }

        const clinicalSummary =
            clinicalSummaryService.getPatientClinicalSummary(
                patientId
            );

        // Patient not found
        if (!clinicalSummary) {
            return res.status(404).json({
                success: false,
                message: "Patient not found"
            });
        }

        res.status(200).json({
            success: true,
            data: clinicalSummary
        });

    } catch (error) {
        console.error(
            "Clinical Summary Error:",
            error
        );

        res.status(500).json({
            success: false,
            message:
                "Failed to generate patient clinical summary"
        });
    }
};

module.exports = {
    getPatientClinicalSummary
};