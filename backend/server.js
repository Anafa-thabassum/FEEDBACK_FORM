const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { appendFeedback, readFeedback } = require("./file-utils");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
    res.send("Feedback API is running...");
});

// GET all feedback
app.get("/feedback", (req, res) => {
    const data = readFeedback();
    res.json({ success: true, data });
});

// POST new feedback
app.post("/feedback", (req, res) => {
    const feedback = req.body;

    // Validation
    if (!feedback.name || !feedback.email || !feedback.category || !feedback.rating || !feedback.message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required!"
        });
    }

    appendFeedback(feedback);

    res.json({
        success: true,
        message: "Feedback saved!",
        data: feedback
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
