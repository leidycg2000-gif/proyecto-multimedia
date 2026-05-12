const Item = require("../models/Item");

// GET
exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

// POST
exports.createItem = async (req, res) => {
  const newItem = new Item(req.body);
  const saved = await newItem.save();
  res.json(saved);
};

// PUT
exports.updateItem = async (req, res) => {
  const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// DELETE
exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ msg: "Eliminado" });
};