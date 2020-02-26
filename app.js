import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
// import session from "express";

const app = express();

app.set("view engine", "pug");
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
// app.use(
//   session({
//     secret: process.env.COOKIE_SECRET,
//     resave: true,
//     saveUnintailized: false
//   })
// );

app.get("/", (req, res) => res.render("home"));

export default app;
