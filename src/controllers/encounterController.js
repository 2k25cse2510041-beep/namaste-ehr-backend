const encounterService = require("../services/encounterService");

const createEncounter = (req, res) => {
    const { patientId } = req.params;
    const {
        type,
        date,
        reason,
        provider,
        notes
    } = req.body;

    if (!type || !date || !reason) {
        return res.status(400).json({
            success: false,
            message: "type, date and reason are required"
        });
    }

    const encounter = encounterService.createEncounter(patientId, {
        type,
        date,
        reason,
        provider,
        notes
    });

    res.status(201).json({
        success: true,
        data: encounter
    });
};

const getEncountersByPatientId = (req, res) => {
    const { patientId } = req.params;

    const encounters =
        encounterService.getEncountersByPatientId(patientId);

    res.status(200).json({
        success: true,
        count: encounters.length,
        data: encounters
    });
};

const getEncounterById = (req, res) => {
    const { patientId, encounterId } = req.params;

    const encounter = encounterService.getEncounterById(
        patientId,
        encounterId
    );

    if (!encounter) {
        return res.status(404).json({
            success: false,
            message: "Encounter not found"
        });
    }

    res.status(200).json({
        success: true,
        data: encounter
    });
};

const updateEncounter = (req, res) => {
    const { patientId, encounterId } = req.params;

    const encounter = encounterService.updateEncounter(
        patientId,
        encounterId,
        req.body
    );

    if (!encounter) {
        return res.status(404).json({
            success: false,
            message: "Encounter not found"
        });
    }

    res.status(200).json({
        success: true,
        data: encounter
    });
};

const deleteEncounter = (req, res) => {
    const { patientId, encounterId } = req.params;

    const encounter = encounterService.deleteEncounter(
        patientId,
        encounterId
    );

    if (!encounter) {
        return res.status(404).json({
            success: false,
            message: "Encounter not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Encounter deleted successfully",
        data: encounter
    });
};

module.exports = {
    createEncounter,
    getEncountersByPatientId,
    getEncounterById,
    updateEncounter,
    deleteEncounter
};