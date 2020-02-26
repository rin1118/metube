export const upload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "editVideo" });

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "videoDetail" });
