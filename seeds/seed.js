const db = require('../config/connection');
const { PopData } = require("../models");

const populationData = require("./popData.json")

db.once('open', async () => {
    await PopData.deleteMany({});
    await PopData.insertMany(populationData)

    console.log("Seeded");
    process.exit(0);
})