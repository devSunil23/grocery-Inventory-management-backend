import express from "express";
import { addGroceryItem, getGroceryItems } from "./controller.js";
const router = express.Router();
/**This api for add grocery items */

router.post("/addItem", addGroceryItem);

/**This api for get grocery items */
router.get("/getItems", getGroceryItems);
export default router;
