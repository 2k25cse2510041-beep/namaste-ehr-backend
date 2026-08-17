let medicalHistories = [];
let nextMedicalHistoryId = 1;

const createMedicalHistory = (patientId, historyData) => {
    const history = {
        id: nextMedicalHistoryId++,
        patientId: Number(patientId),
        ...historyData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    medicalHistories.push(history);

    return history;
};

const getMedicalHistoriesByPatientId = (patientId) => {
    return medicalHistories.filter(
        history => history.patientId === Number(patientId)
    );
};

const getMedicalHistoryById = (patientId, historyId) => {
    return medicalHistories.find(
        history =>
            history.patientId === Number(patientId) &&
            history.id === Number(historyId)
    );
};

const updateMedicalHistory = (patientId, historyId, historyData) => {
    const history = getMedicalHistoryById(patientId, historyId);

    if (!history) {
        return null;
    }

    Object.assign(history, historyData);
    history.updatedAt = new Date().toISOString();

    return history;
};

const deleteMedicalHistory = (patientId, historyId) => {
    const index = medicalHistories.findIndex(
        history =>
            history.patientId === Number(patientId) &&
            history.id === Number(historyId)
    );

    if (index === -1) {
        return null;
    }

    const deletedHistory = medicalHistories[index];

    medicalHistories.splice(index, 1);

    return deletedHistory;
};

module.exports = {
    createMedicalHistory,
    getMedicalHistoriesByPatientId,
    getMedicalHistoryById,
    updateMedicalHistory,
    deleteMedicalHistory
};