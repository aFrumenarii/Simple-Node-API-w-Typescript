import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const specificationsRouter = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRouter.post("/", (req, res) => {
  const { name, description } = req.body;
});
