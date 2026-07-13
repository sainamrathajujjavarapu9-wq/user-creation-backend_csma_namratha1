const mongoose = require("mongoose");
const dns=require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI || mongodb+srv://mongodb+srv://sainamrathajujjavarapu9:namratha@123@cluster0.pcfj1ad.mongodb.net/namratha
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
