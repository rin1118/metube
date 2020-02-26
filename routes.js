//global
const HOME = "/";
const SEARCH = "/search";

//user
const USER = "/user";
const JOIN = "/join";
const LOGIN = "/login";
const PROFILE = ":id/profile";
const MYPAGE = ":id/myPage";
const EDIT_PWD = "/editPwd";
const MY_CHANNEL = ":id/myChannel";

//video
const VIDEO = "/video";
const UPLOAD = "/upload";
const EDIT_VIDEO = "/:id/editVideo";
const VIDEO_DETAIL = "/:id/videoDetail";

const routes = {
  home: HOME,
  search: SEARCH,
  user: USER,
  join: JOIN,
  login: LOGIN,
  profile: PROFILE,
  myPage: MYPAGE,
  editPwd: EDIT_PWD,
  myChannel: MY_CHANNEL,
  video: VIDEO,
  upload: UPLOAD,
  editVideo: EDIT_VIDEO,
  videoDetail: VIDEO_DETAIL
};

export default routes;
