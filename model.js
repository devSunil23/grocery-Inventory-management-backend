import mongoose from "mongoose";
/**schema for grocery item */
const grocerySchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

// Create a model based on the schema
export const groceryModel = mongoose.model("grocery", grocerySchema);
