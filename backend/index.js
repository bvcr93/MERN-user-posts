require("dotenv").config();
const cors = require('cors');
const express = require("express");

const app = express();
app.use(express.json());

app.use(cors());
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const mongoose = require("mongoose");


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("Error connecting to MongoDB Atlas:", error));

const userRoutes = require("./routes/userRoutes");
userRoutes(app);
const postRoutes = require('./routes/postRoutes');
postRoutes(app);

