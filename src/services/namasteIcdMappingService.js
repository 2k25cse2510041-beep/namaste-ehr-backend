let mappingRecords = [
    {
        id: 1,
        namasteCode: "NAM-001",
        namasteTerm: "Amlapitta",
        icd11Code: "DA22.0",
        icd11Term: "Gastro-oesophageal reflux disease",
        mappingType: "Equivalent",
        confidence: "High",
        status: "Active",
        notes: "Initial standardized mapping for EHR interoperability.",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 2,
        namasteCode: "NAM-002",
        namasteTerm: "Shwasa",
        icd11Code: "CA23",
        icd11Term: "Asthma",
        mappingType: "Related",
        confidence: "Moderate",
        status: "Active",
        notes: "Mapping requires clinical context for final interpretation.",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];

let nextMappingId = 3;

// Create mapping
const createMapping = (mappingData) => {
    const record = {
        id: nextMappingId++,
        ...mappingData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    mappingRecords.push(record);

    return record;
};

// Get all mappings
const getAllMappings = () => {
    return mappingRecords;
};

// Get mapping by ID
const getMappingById = (id) => {
    return mappingRecords.find(
        record => record.id === Number(id)
    );
};

// Find mapping by NAMASTE code
const getMappingByNamasteCode = (namasteCode) => {
    return mappingRecords.filter(
        record =>
            record.namasteCode.toLowerCase() ===
            namasteCode.toLowerCase()
    );
};

// Search mappings
const searchMappings = (query) => {
    const searchTerm = query.toLowerCase();

    return mappingRecords.filter(record =>
        record.namasteCode.toLowerCase().includes(searchTerm) ||
        record.namasteTerm.toLowerCase().includes(searchTerm) ||
        record.icd11Code.toLowerCase().includes(searchTerm) ||
        record.icd11Term.toLowerCase().includes(searchTerm)
    );
};

// Update mapping
const updateMapping = (id, mappingData) => {
    const record = getMappingById(id);

    if (!record) {
        return null;
    }

    Object.assign(record, mappingData);

    record.updatedAt = new Date().toISOString();

    return record;
};

// Delete mapping
const deleteMapping = (id) => {
    const index = mappingRecords.findIndex(
        record => record.id === Number(id)
    );

    if (index === -1) {
        return null;
    }

    const deletedRecord = mappingRecords[index];

    mappingRecords.splice(index, 1);

    return deletedRecord;
};

module.exports = {
    createMapping,
    getAllMappings,
    getMappingById,
    getMappingByNamasteCode,
    searchMappings,
    updateMapping,
    deleteMapping
};