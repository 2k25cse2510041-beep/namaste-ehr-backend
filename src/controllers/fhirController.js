const fhirService = require("../services/fhirService");

// Generate FHIR-style EHR Bundle
const generateFhirBundle = (req, res) => {
    try {
        const patientId = Number(req.params.patientId);

        // Validate patient ID
        if (!Number.isInteger(patientId) || patientId <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid patient ID"
            });
        }

        const bundle =
            fhirService.generateFhirBundle(patientId);

        // Patient not found
        if (!bundle) {
            return res.status(404).json({
                success: false,
                message: "Patient not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: bundle
        });

    } catch (error) {
        console.error(
            "FHIR Bundle Generation Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Failed to generate FHIR-style EHR bundle"
        });
    }
};

module.exports = {
    generateFhirBundle
};