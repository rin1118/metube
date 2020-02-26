import routes from "./routes";

export const middleWares = (req, res, next) => {
  res.locals.title = "meTube";
  res.locals.routes = routes;
  next();
};
