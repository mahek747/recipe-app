const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Database connected successfully!!!");
    } catch (error) {
        console.error(`Error connecting to database: ${error.message}`);
        process.exit(1); 
    }
};

module.exports = connectDb;
