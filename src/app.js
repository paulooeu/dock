import "./ambiente";
import express from "express";
import cors from "cors";
import "express-async-errors";
import Youch from "youch";
import cors from "cors";
import routes from "./routes";
import "./database";



class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }
  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
  }
  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === "development" || "test") {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }
      return res.status(500).json("Erro no Servidor");
    });
  }
}
export default new App().server;
