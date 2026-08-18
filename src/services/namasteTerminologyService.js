let terminologyRecords = [
    {
        id: 1,
        namasteCode: "NAM-001",
        term: "Amlapitta",
        system: "Ayurveda",
        category: "Digestive Disorder",
        description: "A traditional Ayurvedic condition associated with digestive disturbance and acidity.",
        status: "Active",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 2,
        namasteCode: "NAM-002",
        term: "Shwasa",
        system: "Ayurveda",
        category: "Respiratory Disorder",
        description: "A traditional Ayurvedic term associated with respiratory difficulty.",
        status: "Active",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 3,
        namasteCode: "NAM-003",
        term: "Sandhivata",
        system: "Ayurveda",
        category: "Musculoskeletal Disorder",
        description: "A traditional Ayurvedic condition associated with joint-related disorders.",
        status: "Active",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];

let nextTerminologyId = 4;

const createTerminology = (terminologyData) => {
    const record = {
        id: nextTerminologyId++,
        ...terminologyData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    terminologyRecords.push(record);

    return record;
};

const getAllTerminology = () => {
    return terminologyRecords;
};

const getTerminologyById = (id) => {
    return terminologyRecords.find(
        record => record.id === Number(id)
    );
};

const searchTerminology = (query) => {
    const searchTerm = query.toLowerCase();

    return terminologyRecords.filter(record =>
        record.term.toLowerCase().includes(searchTerm) ||
        record.namasteCode.toLowerCase().includes(searchTerm) ||
        record.system.toLowerCase().includes(searchTerm) ||
        record.category.toLowerCase().includes(searchTerm)
    );
};

const updateTerminology = (id, terminologyData) => {
    const record = getTerminologyById(id);

    if (!record) {
        return null;
    }

    Object.assign(record, terminologyData);

    record.updatedAt = new Date().toISOString();

    return record;
};

const deleteTerminology = (id) => {
    const index = terminologyRecords.findIndex(
        record => record.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    const deletedRecord = terminologyRecords[index];

    terminologyRecords.splice(index, 1);

    return deletedRecord;
};

module.exports = {
    createTerminology,
    getAllTerminology,
    getTerminologyById,
    searchTerminology,
    updateTerminology,
    deleteTerminology
};