import { groceryModel } from "./model.js";

/**This is controller for add grocery items */
export const addGroceryItem = async (req, res) => {
  const { name, quantity } = req.body;
  try {
    const newGrocery = new groceryModel({
      name,
      quantity,
    });
    await newGrocery.save();
    return res.status(201).json(`${quantity} ${name} added successfully !`);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
/**This is controller for get grocery items */
export const getGroceryItems = async (req, res) => {
  try {
    const items = await groceryModel.find();
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
