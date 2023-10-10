const mongoose = require("mongoose");

// Item schema
const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Item name required"],
  },
  description: {
    type: String,
  },
  unitPrice: {
    type: Number,
    required: [true, "Unit price required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity required"],
  },
  locationId: ObjectId,
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = {
  Item,
};
