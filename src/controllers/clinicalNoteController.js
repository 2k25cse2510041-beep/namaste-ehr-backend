const clinicalNoteService = require("../services/clinicalNoteService");

const createClinicalNote = (req, res) => {
    const { patientId } = req.params;

    const {
        noteType,
        title,
        content,
        author,
        noteDate,
        status
    } = req.body;

    if (!noteType || !title || !content) {
        return res.status(400).json({
            success: false,
            message: "noteType, title and content are required"
        });
    }

    const note = clinicalNoteService.createClinicalNote(
        patientId,
        {
            noteType,
            title,
            content,
            author,
            noteDate,
            status
        }
    );

    res.status(201).json({
        success: true,
        data: note
    });
};

const getClinicalNotesByPatientId = (req, res) => {
    const { patientId } = req.params;

    const notes =
        clinicalNoteService.getClinicalNotesByPatientId(patientId);

    res.status(200).json({
        success: true,
        count: notes.length,
        data: notes
    });
};

const getClinicalNoteById = (req, res) => {
    const { patientId, noteId } = req.params;

    const note = clinicalNoteService.getClinicalNoteById(
        patientId,
        noteId
    );

    if (!note) {
        return res.status(404).json({
            success: false,
            message: "Clinical note not found"
        });
    }

    res.status(200).json({
        success: true,
        data: note
    });
};

const updateClinicalNote = (req, res) => {
    const { patientId, noteId } = req.params;

    const note = clinicalNoteService.updateClinicalNote(
        patientId,
        noteId,
        req.body
    );

    if (!note) {
        return res.status(404).json({
            success: false,
            message: "Clinical note not found"
        });
    }

    res.status(200).json({
        success: true,
        data: note
    });
};

const deleteClinicalNote = (req, res) => {
    const { patientId, noteId } = req.params;

    const note = clinicalNoteService.deleteClinicalNote(
        patientId,
        noteId
    );

    if (!note) {
        return res.status(404).json({
            success: false,
            message: "Clinical note not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Clinical note deleted successfully",
        data: note
    });
};

module.exports = {
    createClinicalNote,
    getClinicalNotesByPatientId,
    getClinicalNoteById,
    updateClinicalNote,
    deleteClinicalNote
};