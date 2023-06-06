const noiseLevel = require("../models/noise.model");

exports.noiseGetAll = async (req,res) => {
    try {
    const data = await noiseLevel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
}

exports.noisePostOne = async (req,res) => {
    try {
    const NoiseLevel = await noiseLevel.create({
        value: req.body.value,
    });

    if (NoiseLevel) {
      res
        .status(201)
        .send({ message: "successfully created", status: "ok" });
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong!" });
  }
}