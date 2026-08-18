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

// Patient API
app.use("/api/patients", patientRoutes);

// Patient Records API
app.use("/api/patients", patientRecordRoutes);

// Diagnosis API
app.use("/api/patients", diagnosisRoutes);

// Encounter API
app.use("/api/patients", encounterRoutes);

// Prescription API
app.use("/api/patients", prescriptionRoutes);

// Medical History API
app.use("/api/patients", medicalHistoryRoutes);

// Allergy API
app.use("/api/patients", allergyRoutes);

// Vital Signs API
app.use("/api/patients", vitalSignsRoutes);

// Lab Reports API
app.use("/api/patients", labReportRoutes);

// Immunization API
app.use("/api/patients", immunizationRoutes);

// Clinical Notes API
app.use("/api/patients", clinicalNoteRoutes);

// Family History API
app.use("/api/patients", familyHistoryRoutes);

// Social History API
app.use("/api/patients", socialHistoryRoutes);

// Surgical History API
app.use("/api/patients", surgicalHistoryRoutes);

// Medication History API
app.use("/api/patients", medicationHistoryRoutes);

// Procedures API
app.use("/api/patients", procedureRoutes);

// Diagnosis History API
app.use("/api/patients", diagnosisHistoryRoutes);

// Diagnosis Summary API
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