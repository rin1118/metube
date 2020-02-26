export const join = (req, res) => res.render("join", { pageTitle: "join" });
export const login = (req, res) => res.render("login", { pageTitle: "login" });
export const profile = (req, res) =>
  res.render("profile", { pageTitle: "profile" });
export const myPage = (req, res) =>
  res.render("myPage", { pageTitle: "myPage" });
export const editPwd = (req, res) =>
  res.render("editPwd", { pageTitle: "editPwd" });
export const myChannel = (req, res) =>
  res.render("myChannel", { pageTitle: "myChannel" });
