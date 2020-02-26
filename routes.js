//global
const HOME = "/";
const SEARCH = "/search";

//user
const USER = "/user";
const JOIN = "/join";
const LOGIN = "/login";
const PROFILE = "/profile"; //회원정보 수정
const MYPAGE = "/:id/myPage"; //유저 detail
const EDIT_PWD = "/editPwd";
const MY_CHANNEL = "/myChannel"; //내 채널 만들기

//video

const routes = {
  home: HOME,
  search: SEARCH,
  user: USER,
  join: JOIN,
  login: LOGIN,
  profile: PROFILE,
  myPage: MYPAGE,
  editPwd: EDIT_PWD,
  myChannel: MY_CHANNEL
};

export default routes;
