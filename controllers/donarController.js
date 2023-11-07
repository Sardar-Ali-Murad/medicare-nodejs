import donarModel from "../models/donarModel.js";
import { BadRequestError } from "../errors/index.js";
import { StatusCodes } from "http-status-codes";

const createDonar = async (req, res) => {
  let { country, group, state, city,number,email,date,name } = req.body;
  if (!country || !group || !state || !city || !name || !number || !email || !date ) {
    throw new BadRequestError("Provide all the values");
  }
  await donarModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "donar created successfully" });
};

const getAllDonars = async (req, res) => {
  let donars = await donarModel.find({});
  res.status(StatusCodes.OK).json({ donars });
};

const updateDonar = async (req, res) => {
  let donar = await donarModel.findOne({_id:req.params.id});
  donar.isVerified=req.body.verification
  await donar.save()
  res.status(StatusCodes.OK).json({msg:"Donar Status Changes Successfully"});
};

export { createDonar, getAllDonars,updateDonar };
