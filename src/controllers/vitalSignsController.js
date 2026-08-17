const vitalSignsService = require("../services/vitalSignsService");

const createVitalSigns = (req, res) => {
    const { patientId } = req.params;

    const {
        temperature,
        bloodPressure,
        heartRate,
        respiratoryRate,
        oxygenSaturation,
        weight,
        height,
        notes
    } = req.body;

    if (
        temperature === undefined ||
        !bloodPressure ||
        heartRate === undefined ||
        respiratoryRate === undefined ||
        oxygenSaturation === undefined
    ) {
        return res.status(400).json({
            success: false,
            message:
                "temperature, bloodPressure, heartRate, respiratoryRate and oxygenSaturation are required"
        });
    }

    const vitalSigns = vitalSignsService.createVitalSigns(
        patientId,
        {
            temperature,
            bloodPressure,
            heartRate,
            respiratoryRate,
            oxygenSaturation,
            weight,
            height,
            notes
        }
    );

    res.status(201).json({
        success: true,
        data: vitalSigns
    });
};

const getVitalSignsByPatientId = (req, res) => {
    const { patientId } = req.params;

    const vitalSigns =
        vitalSignsService.getVitalSignsByPatientId(patientId);

    res.status(200).json({
        success: true,
        count: vitalSigns.length,
        data: vitalSigns
    });
};

const getVitalSignsById = (req, res) => {
    const { patientId, vitalSignsId } = req.params;

    const vitalSigns = vitalSignsService.getVitalSignsById(
        patientId,
        vitalSignsId
    );

    if (!vitalSigns) {
        return res.status(404).json({
            success: false,
            message: "Vital signs not found"
        });
    }

    res.status(200).json({
        success: true,
        data: vitalSigns
    });
};

const updateVitalSigns = (req, res) => {
    const { patientId, vitalSignsId } = req.params;

    const vitalSigns = vitalSignsService.updateVitalSigns(
        patientId,
        vitalSignsId,
        req.body
    );

    if (!vitalSigns) {
        return res.status(404).json({
            success: false,
            message: "Vital signs not found"
        });
    }

    res.status(200).json({
        success: true,
        data: vitalSigns
    });
};

const deleteVitalSigns = (req, res) => {
    const { patientId, vitalSignsId } = req.params;

    const vitalSigns = vitalSignsService.deleteVitalSigns(
        patientId,
        vitalSignsId
    );

    if (!vitalSigns) {
        return res.status(404).json({
            success: false,
            message: "Vital signs not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Vital signs deleted successfully",
        data: vitalSigns
    });
};

module.exports = {
    createVitalSigns,
    getVitalSignsByPatientId,
    getVitalSignsById,
    updateVitalSigns,
    deleteVitalSigns
};