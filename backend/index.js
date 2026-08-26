require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { holdingModel } = require('./models/holdingModel');
const { positionsModel } = require('./models/positionsModel');
const { ordersModel } = require('./models/ordersModel');
const { usersModel } = require('./models/usersModel');
const { createSecretToken } = require("./util/SecretToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

const PORT = process.env.PORT || 3002;

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(bodyParser.json());


app.get('/allHoldings', async (req, res) => {
  let allHoldings = await holdingModel.find({})
  res.json(allHoldings);
})

app.get('/allOrders', async (req, res) => {
  let allOrders = await ordersModel.find({});
  res.json(allOrders);
})

app.get('/allPositions', async (req, res) => {
  let allPositions = await positionsModel.find({});
  res.json(allPositions);
})

app.post('sellOrder', async (req, res) => {
  let sellOrder = new ordersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  sellOrder.save();

  res.save('selled');
})
app.post('/addOrder', async (req, res) => {
  let addOrder = new ordersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  addOrder.save();

  res.send('done');
})

app.post('/signUp', async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const existingUser = await usersModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists", success: false });
    }

    const newUser = await usersModel.create({ email, username, password });
    const token = createSecretToken(newUser._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });
    res.status(201).json({ message: "Account created successfully", success: true });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Unable to create account", success: false });
  }
})

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All fields are required' })
    }

    const existingUser = await usersModel.findOne({ email });
    if (!existingUser) {
      return res.status(409).json({ message: "Incorrect email or password", success: false });
    }
    //authorization
    const auth = await bcrypt.compare(password, existingUser.password)
    if (!auth) {
      return res.json({ message: 'Incorrect password or email' })
    }

    const token = createSecretToken(existingUser._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
    });
    res.status(201).json({ message: "Account logged in successfully", success: true });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Unable to Login account", success: false });
  }
})

app.post("/logout", (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "lax" });

  res.status(200).json({
    message: "Logged out successfully",
  });
});

app.get("/isloggedin", async (req, res) => {
  try {
    const cookies = req.headers.cookie || "";
    const token = cookies
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("token="))
      ?.slice("token=".length);

    if (!token) {
      return res.status(401).json({
        loggedIn: false,
      });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await usersModel.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        loggedIn: false,
      });
    }

    res.status(200).json({
      loggedIn: true,
      user,
    });
  } catch (error) {
    res.status(401).json({
      loggedIn: false,
    });
  }
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Error:");
    console.error(err);
  });
