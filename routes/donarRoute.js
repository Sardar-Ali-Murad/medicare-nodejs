import express from "express";
let router = express.Router();

import authenticateUser from "../middleware/auth.js";

import {
  createDonar,
  getAllDonars,
  updateDonar,
} from "../controllers/donarController.js";

router.route("/").post(createDonar).get(getAllDonars);
router.route("/:id").patch(authenticateUser, updateDonar);

export default router;
