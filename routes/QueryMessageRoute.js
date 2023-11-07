import express from "express";
let router = express.Router();

import {
  createMessage,
  getAllMessages,
} from "../controllers/QueryController.js";

router.route("/").post(createMessage).get(getAllMessages);

export default router;
