let mappingRecords = [
    {
        id: 1,
        namasteCode: "NAM-001",
        namasteTerm: "Amlapitta",
        icd11Code: "DA22.0",
        icd11Term: "Gastro-oesophageal reflux disease",
        mappingType: "Equivalent",
        confidence: "High",
        status: "Verified",
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
        status: "Pending",
        notes: "Mapping requires clinical context for final interpretation.",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];

let nextMappingId = 3;


// =====================================================
// CREATE MAPPING
// =====================================================

const createMapping = (mappingData) => {

    const record = {
        id: nextMappingId++,
        ...mappingData,

        // New mappings require verification
        status: mappingData.status || "Pending",

        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    mappingRecords.push(record);

    return record;
};


// =====================================================
// GET ALL MAPPINGS
// =====================================================

const getAllMappings = () => {
    return mappingRecords;
};


// =====================================================
// GET MAPPING BY ID
// =====================================================

const getMappingById = (id) => {

    return mappingRecords.find(
        record => record.id === Number(id)
    );
};


// =====================================================
// GET BY NAMASTE CODE
// =====================================================

const getMappingByNamasteCode = (namasteCode) => {

    return mappingRecords.filter(
        record =>
            record.namasteCode.toLowerCase() ===
            namasteCode.toLowerCase()
    );
};


// =====================================================
// SEARCH MAPPINGS
// =====================================================

const searchMappings = (query) => {

    const searchTerm = query.toLowerCase();

    return mappingRecords.filter(record =>
        record.namasteCode.toLowerCase().includes(searchTerm) ||
        record.namasteTerm.toLowerCase().includes(searchTerm) ||
        record.icd11Code.toLowerCase().includes(searchTerm) ||
        record.icd11Term.toLowerCase().includes(searchTerm)
    );
};


// =====================================================
// UPDATE MAPPING
// =====================================================

const updateMapping = (id, mappingData) => {

    const record = getMappingById(id);

    if (!record) {
        return null;
    }

    Object.assign(record, mappingData);

    record.updatedAt = new Date().toISOString();

    return record;
};


// =====================================================
// DELETE MAPPING
// =====================================================

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


// =====================================================
// VERIFICATION
// =====================================================

// Get mappings by verification status

const getMappingsByStatus = (status) => {

    return mappingRecords.filter(
        record =>
            record.status.toLowerCase() ===
            status.toLowerCase()
    );
};


// Get pending mappings

const getPendingMappings = () => {

    return getMappingsByStatus("Pending");
};


// Get verified mappings

const getVerifiedMappings = () => {

    return getMappingsByStatus("Verified");
};


// Get rejected mappings

const getRejectedMappings = () => {

    return getMappingsByStatus("Rejected");
};


// Get modified mappings

const getModifiedMappings = () => {

    return getMappingsByStatus("Modified");
};


// Verify mapping

const verifyMapping = (id, verificationData = {}) => {

    const record = getMappingById(id);

    if (!record) {
        return null;
    }

    record.status = "Verified";

    if (verificationData.notes !== undefined) {
        record.notes = verificationData.notes;
    }

    record.verifiedAt = new Date().toISOString();

    record.updatedAt = new Date().toISOString();

    return record;
};


// Reject mapping

const rejectMapping = (id, verificationData = {}) => {

    const record = getMappingById(id);

    if (!record) {
        return null;
    }

    record.status = "Rejected";

    if (verificationData.notes !== undefined) {
        record.notes = verificationData.notes;
    }

    record.rejectedAt = new Date().toISOString();

    record.updatedAt = new Date().toISOString();

    return record;
};


// Modify mapping and mark as modified

const modifyMapping = (id, mappingData) => {

    const record = getMappingById(id);

    if (!record) {
        return null;
    }

    Object.assign(record, mappingData);

    record.status = "Modified";

    record.updatedAt = new Date().toISOString();

    return record;
};


module.exports = {
    createMapping,
    getAllMappings,
    getMappingById,
    getMappingByNamasteCode,
    searchMappings,
    updateMapping,
    deleteMapping,

    // Verification
    getMappingsByStatus,
    getPendingMappings,
    getVerifiedMappings,
    getRejectedMappings,
    getModifiedMappings,
    verifyMapping,
    rejectMapping,
    modifyMapping
};