const express = require("express");

const patientRoutes = require("./routes/patientRoutes");
const patientRecordRoutes = require("./routes/patientRecordRoutes");
const diagnosisRoutes = require("./routes/diagnosisRoutes");
const encounterRoutes = require("./routes/encounterRoutes");
const prescriptionRoutes = require("./routes/prescriptionRoutes");
const medicalHistoryRoutes = require("./routes/medicalHistoryRoutes");
const allergyRoutes = require("./routes/allergyRoutes");
const vitalSignsRoutes = require("./routes/vitalSignsRoutes");
const labReportRoutes = require("./routes/labReportRoutes");
const immunizationRoutes = require("./routes/immunizationRoutes");
const clinicalNoteRoutes = require("./routes/clinicalNoteRoutes");
const familyHistoryRoutes = require("./routes/familyHistoryRoutes");
const socialHistoryRoutes = require("./routes/socialHistoryRoutes");
const surgicalHistoryRoutes = require("./routes/surgicalHistoryRoutes");
const medicationHistoryRoutes = require("./routes/medicationHistoryRoutes");
const procedureRoutes = require("./routes/procedureRoutes");
const diagnosisHistoryRoutes = require("./routes/diagnosisHistoryRoutes");
const diagnosisSummaryRoutes = require("./routes/diagnosisSummaryRoutes");

// NAMASTE Terminology
const namasteTerminologyRoutes = require("./routes/namasteTerminologyRoutes");

// NAMASTE ↔ ICD-11 Mapping
const namasteIcdMappingRoutes = require("./routes/namasteIcdMappingRoutes");

// EHR Interoperability
const interoperabilityRoutes = require("./routes/interoperabilityRoutes");

// Unified Clinical Summary
const clinicalSummaryRoutes = require("./routes/clinicalSummaryRoutes");

// FHIR-style EHR Exchange
const fhirRoutes = require("./routes/fhirRoutes");

const app = express();


// =====================================================
// MIDDLEWARE
// =====================================================

app.use(express.json());


// =====================================================
// ROOT ROUTE
// =====================================================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "NAMASTE EHR Backend is running"
    });
});


// =====================================================
// EHR APIs
// =====================================================

app.use("/api/patients", patientRoutes);
app.use("/api/patients", patientRecordRoutes);
app.use("/api/patients", diagnosisRoutes);
app.use("/api/patients", encounterRoutes);
app.use("/api/patients", prescriptionRoutes);
app.use("/api/patients", medicalHistoryRoutes);
app.use("/api/patients", allergyRoutes);
app.use("/api/patients", vitalSignsRoutes);
app.use("/api/patients", labReportRoutes);
app.use("/api/patients", immunizationRoutes);
app.use("/api/patients", clinicalNoteRoutes);
app.use("/api/patients", familyHistoryRoutes);
app.use("/api/patients", socialHistoryRoutes);
app.use("/api/patients", surgicalHistoryRoutes);
app.use("/api/patients", medicationHistoryRoutes);
app.use("/api/patients", procedureRoutes);
app.use("/api/patients", diagnosisHistoryRoutes);
app.use("/api/patients", diagnosisSummaryRoutes);


// =====================================================
// NAMASTE TERMINOLOGY
// =====================================================

app.use(
    "/api/namaste-terminology",
    namasteTerminologyRoutes
);


// =====================================================
// NAMASTE ↔ ICD-11 MAPPING
// =====================================================

app.use(
    "/api/namaste-icd-mappings",
    namasteIcdMappingRoutes
);


// =====================================================
// EHR INTEROPERABILITY
// =====================================================

app.use(
    "/api/interoperability",
    interoperabilityRoutes
);


// =====================================================
// UNIFIED CLINICAL SUMMARY
// =====================================================

app.use(
    "/api/clinical-summary",
    clinicalSummaryRoutes
);


// =====================================================
// FHIR-STYLE EHR EXCHANGE
// =====================================================

app.use(
    "/api/fhir",
    fhirRoutes
);


// =====================================================
// 404 HANDLER
// =====================================================

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});


// =====================================================
// EXPORT APP
// =====================================================

module.exports = app;