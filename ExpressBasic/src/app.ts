import * as express from "express";
import { Cat, CatType } from "./app.models";

const app: express.Express = express();

// middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("😀 logging Middleware");
  next();
});

// middleware for "/cats/som"
app.get("/cats/som", (req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("😎 som Middleware");
  next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get("/cats/blue", (req, res, next: express.NextFunction) => {
  res.send({ blue: Cat[0] });
});

app.get("/cats/som", (req, res) => {
  res.send({ som: Cat[1] });
});

// Error middleware
// 마지막에 위치함을 통해 위에서부터 해당하는 경로를 찾다가 해당 경로가 없다면 실행되게 된다.
app.use((req, res, next) => {
  console.log("✋ Error Middleware");
  res.send({ error: "404 Not Found Error" });
});

app.listen(8000, () => {
  console.log("Server started");
});
