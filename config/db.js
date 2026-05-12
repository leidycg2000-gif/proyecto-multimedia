const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error MongoDB:", error.message);
    if (error.message.includes("ECONNREFUSED") || error.message.includes("querySrv")) {
      console.error("→ Verifica: 1) IP whitelisted en MongoDB Atlas  2) Cluster no está pausado  3) Conexión a internet activa");
    }
    process.exit(1);
  }
};

module.exports = connectDB;