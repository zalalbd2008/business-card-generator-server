const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 1000;
const path = require("path");

// routes
const userRoutes = require("./modules/user/user.routes");
const templateRoutes = require("./modules/template/template.routes");
const ticketRoutes = require("./modules/ticket/ticket.routes");

const app = express();

// middleware
app.use(cors());
app.use(express.json({ limit: "500mb" }));
app.use(
  express.urlencoded({ limit: "500mb", extended: true, parameterLimit: 500000 })
);

connectDB();

// routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/templates", templateRoutes);
app.use("/api/v1/tickets", ticketRoutes);

// static file serving
app.use("/api/v1/uploads", express.static(path.join(__dirname, "/")));

// -----------------socket server-----------------

// testing api
app.get("/api/v1", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is Running PORT: ${PORT}`);
});
