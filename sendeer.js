const Category = require("./models/CategoryModel");
const User = require("./models/UserModel");
const Video = require("./models/VideoModel");
const dotenv = require("dotenv");
const fs = require("fs");
const colors = require("colors");
const mongoose = require("mongoose");

dotenv.config({ path: "./config/config.env" });

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

// Read JSON files
const category = JSON.parse(
  fs.readFileSync(`${__dirname}/faqe_data/category.json`, "utf-8")
);
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/faqe_data/users.json`, "utf-8")
);
const videos = JSON.parse(
  fs.readFileSync(`${__dirname}/faqe_data/videos.json`, "utf-8")
);
// Import into DB
const importData = async () => {
  try {
    //await Category.create(category);
    await User.create(users);
    //await Video.create(videos);
    console.log("Data Imported....".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete into DB
const deleteData = async () => {
  try {
    await Video.deleteMany();

    console.log("Data Deleted....".red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[[2]] === "-D") {
  deleteData();
}
