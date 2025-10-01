const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");

let MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main (){
    await mongoose.connect(MONGO_URL);
}

main()
    .then((res)=>{
      console.log("connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    })


const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "68db612093686457cfaa789b",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();
