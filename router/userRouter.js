import express from "express";
import routes from "../routes";
import {
  login,
  join,
  profile,
  myPage,
  editPwd,
  myChannel
} from "../controller/userController";

const userRouter = express.Router();

userRouter.get(routes.join, join);
userRouter.get(routes.login, login);
userRouter.get(routes.profile, profile);
userRouter.get(routes.myPage, myPage);
userRouter.get(routes.editPwd, editPwd);
userRouter.get(routes.myChannel, myChannel);

export default userRouter;
