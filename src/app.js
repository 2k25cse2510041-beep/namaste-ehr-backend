const express = require("express");
const patientRoutes = require("./routes/patientRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "NAMASTE EHR Backend is running"
    });
});

app.use("/api/patients", patientRoutes);

module.exports = app;