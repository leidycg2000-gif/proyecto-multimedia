const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Item", ItemSchema);