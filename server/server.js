// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// // Allow requests from the React frontend
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );

// // Parse incoming JSON data
// app.use(express.json());

// // Test route
// app.get("/", (req, res) => {
//   res.json({
//     message: "AquaHeat backend is running",
//   });
// });

// // Start server
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`AquaHeat server running on port ${PORT}`);
// });


const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "AquaHeat backend is running",
  });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`AquaHeat server running on port ${PORT}`);
  });
};

startServer();