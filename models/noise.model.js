const mongoose = require("mongoose")

const noiselevelSchema = new mongoose.Schema({
    value: Number,
    timestamp: { type: Date, default: Date.now }
});

const noiseLevel = mongoose.model("noiseData", noiselevelSchema);
module.exports = noiseLevel;