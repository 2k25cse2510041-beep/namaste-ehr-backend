const namasteIcdMappingService = require("./namasteIcdMappingService");

// Generate standardized clinical representation
const generateStandardizedRecord = (clinicalData) => {
    const {
        patientId,
        namasteCode,
        namasteTerm,
        clinicalStatus,
        clinicalNotes
    } = clinicalData;

    // Find corresponding NAMASTE → ICD-11 mapping
    const mappings =
        namasteIcdMappingService.getMappingByNamasteCode(namasteCode);

    const mapping = mappings.length > 0 ? mappings[0] : null;

    return {
        patientId,

        terminology: {
            system: "NAMASTE",
            code: namasteCode,
            term: namasteTerm
        },

        clinicalStatus,

        clinicalNotes,

        standardizedCoding: mapping
            ? {
                  system: "ICD-11",
                  code: mapping.icd11Code,
                  term: mapping.icd11Term,
                  mappingType: mapping.mappingType,
                  confidence: mapping.confidence
              }
            : null,

        interoperability: {
            mapped: !!mapping,
            mappingStatus: mapping
                ? "Mapped"
                : "Mapping Not Found"
        },

        generatedAt: new Date().toISOString()
    };
};

module.exports = {
    generateStandardizedRecord
};