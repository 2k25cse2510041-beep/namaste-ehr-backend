const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// =====================================================
// ROUTES
// =====================================================

const patientRoutes = require("./routes/patientRoutes");
const patientRecordRoutes = require("./routes/patientRecordRoutes");

const diagnosisRoutes = require("./routes/diagnosisRoutes");
const diagnosisHistoryRoutes = require("./routes/diagnosisHistoryRoutes");
const diagnosisSummaryRoutes = require("./routes/diagnosisSummaryRoutes");

const prescriptionRoutes = require("./routes/prescriptionRoutes");
const medicationHistoryRoutes = require("./routes/medicationHistoryRoutes");

const procedureRoutes = require("./routes/procedureRoutes");

const allergyRoutes = require("./routes/allergyRoutes");

const vitalSignsRoutes = require("./routes/vitalSignsRoutes");

const labReportRoutes = require("./routes/labReportRoutes");

const clinicalNoteRoutes = require("./routes/clinicalNoteRoutes");
const clinicalSummaryRoutes = require("./routes/clinicalSummaryRoutes");

const encounterRoutes = require("./routes/encounterRoutes");

const familyHistoryRoutes = require("./routes/familyHistoryRoutes");
const medicalHistoryRoutes = require("./routes/medicalHistoryRoutes");
const socialHistoryRoutes = require("./routes/socialHistoryRoutes");
const surgicalHistoryRoutes = require("./routes/surgicalHistoryRoutes");
const immunizationRoutes = require("./routes/immunizationRoutes");

const namasteTerminologyRoutes =
    require("./routes/namasteTerminologyRoutes");

const namasteIcdMappingRoutes =
    require("./routes/namasteIcdMappingRoutes");

const interoperabilityRoutes =
    require("./routes/interoperabilityRoutes");

const fhirRoutes =
    require("./routes/fhirRoutes");

const dashboardRoutes =
    require("./routes/dashboardRoutes");

const analyticsRoutes =
    require("./routes/analyticsRoutes");


// =====================================================
// HEALTH CHECK
// =====================================================

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "NAMASTE EHR Backend is running"
    });
});


// =====================================================
// DASHBOARD
// =====================================================

app.use("/api/dashboard", dashboardRoutes);


// =====================================================
// ANALYTICS
// =====================================================

app.use("/api/analytics", analyticsRoutes);


// =====================================================
// EHR APIs
// =====================================================

app.use("/api/patients", patientRoutes);

app.use("/api/patients", patientRecordRoutes);

app.use("/api/diagnoses", diagnosisRoutes);

app.use("/api/diagnosis-history", diagnosisHistoryRoutes);

app.use("/api/diagnosis-summary", diagnosisSummaryRoutes);

app.use("/api/prescriptions", prescriptionRoutes);

app.use("/api/medication-history", medicationHistoryRoutes);

app.use("/api/procedures", procedureRoutes);

app.use("/api/allergies", allergyRoutes);

app.use("/api/vital-signs", vitalSignsRoutes);

app.use("/api/lab-reports", labReportRoutes);

app.use("/api/clinical-notes", clinicalNoteRoutes);

app.use("/api/clinical-summary", clinicalSummaryRoutes);

app.use("/api/encounters", encounterRoutes);

app.use("/api/family-history", familyHistoryRoutes);

app.use("/api/medical-history", medicalHistoryRoutes);

app.use("/api/social-history", socialHistoryRoutes);

app.use("/api/surgical-history", surgicalHistoryRoutes);

app.use("/api/immunizations", immunizationRoutes);


// =====================================================
// NAMASTE APIs
// =====================================================

app.use(
    "/api/namaste-terminology",
    namasteTerminologyRoutes
);

app.use(
    "/api/namaste-icd-mappings",
    namasteIcdMappingRoutes
);


// =====================================================
// INTEROPERABILITY
// =====================================================

app.use(
    "/api/interoperability",
    interoperabilityRoutes
);


// =====================================================
// FHIR
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
        message: "API endpoint not found"
    });
});


// =====================================================
// ERROR HANDLER
// =====================================================

app.use((err, req, res, next) => {
    console.error("API ERROR:", err);

    res.status(500).json({
        success: false,
        message: "Internal server error"
    });
});


module.exports = app;