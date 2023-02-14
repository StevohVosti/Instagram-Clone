const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({path: "config/config.env"});
const connectDatabase = require("./Database/db");
const { default: mongoose } = require("mongoose");
const cloudinary = require("cloudinary");

// Connectng to MongoDB
mongoose.set("strictQuery", true);
mongoose.set("strictQuery", false);
connectDatabase();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the Server due to unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
