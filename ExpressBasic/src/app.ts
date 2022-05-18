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
      console.log("😀 logging Middleware");
      next();
    });

    // json middleware
    this.app.use(express.json());

    this.setRoute();

    // 404 middleware
    // 마지막에 위치함을 통해 위에서부터 해당하는 경로를 찾다가 해당 경로가 없다면 실행되게 된다.
    this.app.use((req, res, next) => {
      console.log("✋ Error Middleware");
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
