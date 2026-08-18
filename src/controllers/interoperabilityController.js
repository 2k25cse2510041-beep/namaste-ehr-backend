const interoperabilityService = require("../services/interoperabilityService");

// Generate standardized EHR record
const generateStandardizedRecord = (req, res) => {
    try {
        const {
            patientId,
            namasteCode,
            namasteTerm,
            clinicalStatus,
            clinicalNotes
        } = req.body;

        // Validate required fields
        if (!patientId || !namasteCode || !namasteTerm) {
            return res.status(400).json({
                success: false,
                message:
                    "patientId, namasteCode and namasteTerm are required"
            });
        }

        const standardizedRecord =
            interoperabilityService.generateStandardizedRecord(
                req.body
            );

        res.status(200).json({
            success: true,
            data: standardizedRecord
        });

    } catch (error) {
        console.error(
            "Interoperability Error:",
            error
        );

        res.status(500).json({
            success: false,
            message:
                "Failed to generate standardized clinical record"
        });
    }
};

module.exports = {
    generateStandardizedRecord
};