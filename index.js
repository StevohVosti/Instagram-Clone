const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./Database/db");
const { default: mongoose } = require("mongoose");
dotenv.config({path: "config/config.env"});

mongoose.set("strictQuery", false);
mongoose.set("strictQuery", true);

// Connect Database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
