let clinicalNotes = [];
let nextClinicalNoteId = 1;

const createClinicalNote = (patientId, noteData) => {
    const note = {
        id: nextClinicalNoteId++,
        patientId: Number(patientId),
        ...noteData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    clinicalNotes.push(note);

    return note;
};

const getClinicalNotesByPatientId = (patientId) => {
    return clinicalNotes.filter(
        note => note.patientId === Number(patientId)
    );
};

const getClinicalNoteById = (patientId, noteId) => {
    return clinicalNotes.find(
        note =>
            note.patientId === Number(patientId) &&
            note.id === Number(noteId)
    );
};

const updateClinicalNote = (patientId, noteId, noteData) => {
    const note = getClinicalNoteById(patientId, noteId);

    if (!note) {
        return null;
    }

    Object.assign(note, noteData);
    note.updatedAt = new Date().toISOString();

    return note;
};

const deleteClinicalNote = (patientId, noteId) => {
    const index = clinicalNotes.findIndex(
        note =>
            note.patientId === Number(patientId) &&
            note.id === Number(noteId)
    );

    if (index === -1) {
        return null;
    }

    const deletedNote = clinicalNotes[index];

    clinicalNotes.splice(index, 1);

    return deletedNote;
};

module.exports = {
    createClinicalNote,
    getClinicalNotesByPatientId,
    getClinicalNoteById,
    updateClinicalNote,
    deleteClinicalNote
};