require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const authRoute = require("./Routes/AuthRoute");

const app = express();

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

/* ----------------------- Middleware ----------------------- */

app.use(
  cors({
    origin:  [
      "http://localhost:3000",
      "http://localhost:3001",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

/* ------------------------ Routes -------------------------- */

// Authentication Routes
app.use("/", authRoute);

// Holdings API
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.status(200).json(allHoldings);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch holdings",
    });
  }
});

// Positions API
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.status(200).json(allPositions);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch positions",
    });
  }
});

// Create Order API
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = await OrdersModel.create({
      name,
      qty,
      price,
      mode,
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Unable to place order",
    });
  }
});

/* --------------------- MongoDB Connection --------------------- */

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Failed");
    console.log(err);
  });