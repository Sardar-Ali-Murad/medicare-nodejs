import QueryMessageModel from "../models/QueryModel.js";
import { BadRequestError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";

const createMessage = async (req, res) => {
  let { name, email, number, message } = req.body;
  if (!name || !email || !number || !message) {
    throw new BadRequestError("Provide all the values");
  }
  await QueryMessageModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "Message created successfully" });
};

const getAllMessages = async (req, res) => {
  let Messages = await QueryMessageModel.find({});
  res.status(StatusCodes.OK).json({ data: Messages });
};

export { createMessage, getAllMessages };
