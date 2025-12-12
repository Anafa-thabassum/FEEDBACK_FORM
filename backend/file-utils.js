const fs = require("fs");
const path = "./feedback.json";

function readFeedback() {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "[]");
    }
    const data = fs.readFileSync(path, "utf-8");
    return JSON.parse(data);
}

function appendFeedback(newFeedback) {
    const data = readFeedback();
    newFeedback.id = Date.now();
    newFeedback.createdAt = new Date().toISOString();
    data.push(newFeedback);
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

module.exports = { readFeedback, appendFeedback };
