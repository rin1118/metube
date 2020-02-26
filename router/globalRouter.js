import express from "express";
import routes from "../routes";
import { search, home } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

export default globalRouter;
