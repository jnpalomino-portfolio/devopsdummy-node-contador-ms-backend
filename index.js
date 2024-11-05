const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

//Servidor
const app = express();

const corsOptions = {
  origin: "http://localhost:8080",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "*"],
};

//conectar la DB
conectarDB();

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/app_dummy", require("./routes/appDummy"));

//Ruta principal
app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(3000, () => {
  console.log("El servidor esta corriendo correctamente");
});
