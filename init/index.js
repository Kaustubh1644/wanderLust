if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "../.env" });
}


const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;  // make sure you have this in .env
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

let MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});

  for (let obj of initData.data) {
    let geoResponse = await geocodingClient
      .forwardGeocode({
        query: obj.location,
        limit: 1,
      })
      .send();

    let listing = new Listing({
      ...obj,
      owner: "68db612093686457cfaa789b",
      geometry: geoResponse.body.features[0].geometry, // 👈 real coordinates
    });

    await listing.save();
  }

  console.log("data was initialized with real map locations 🌍");
};

initDB();
