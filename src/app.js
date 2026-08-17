const express = require("express");

const patientRoutes = require("./routes/patientRoutes");
const patientRecordRoutes = require("./routes/patientRecordRoutes");

const app = express();

app.use(express.json());

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

module.exports = app;