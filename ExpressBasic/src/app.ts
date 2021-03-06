import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }
  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("π logging Middleware");
      next();
    });

    // json middleware
    this.app.use(express.json());

    this.setRoute();

    // 404 middleware
    // λ§μ§λ§μ μμΉν¨μ ν΅ν΄ μμμλΆν° ν΄λΉνλ κ²½λ‘λ₯Ό μ°Ύλ€κ° ν΄λΉ κ²½λ‘κ° μλ€λ©΄ μ€νλκ² λλ€.
    this.app.use((req, res, next) => {
      console.log("β Error Middleware");
      res.send({ error: "404 Not Found Error" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("Server started...");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
