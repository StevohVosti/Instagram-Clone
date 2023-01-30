const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path: "config/config.env"})

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

const connectDatabase = ( ) => {
  mongoose.connect(`mongodb://${USERNAME}:${PASSWORD}@ac-xiv0ezo-shard-00-00.6n8um1i.mongodb.net:27017,ac-xiv0ezo-shard-00-01.6n8um1i.mongodb.net:27017,ac-xiv0ezo-shard-00-02.6n8um1i.mongodb.net:27017/?ssl=true&replicaSet=atlas-8on1gu-shard-0&authSource=admin&retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((data) => {
    console.log(`Database is now connected: ${data.connection.host}`);
  });
};



module.exports = connectDatabase;