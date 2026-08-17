const express = require("express");

const patientRoutes = require("./routes/patientRoutes");
const patientRecordRoutes = require("./routes/patientRecordRoutes");
const diagnosisRoutes = require("./routes/diagnosisRoutes");
const encounterRoutes = require("./routes/encounterRoutes");
const prescriptionRoutes = require("./routes/prescriptionRoutes");

const app = express();

app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "NAMASTE EHR Backend is running"
    });
});

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

module.exports = app;