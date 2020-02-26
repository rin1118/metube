import express from "express";
import routes from "../routes";
import { upload, editVideo, videoDetail } from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.videoDetail, videoDetail);

export default videoRouter;
