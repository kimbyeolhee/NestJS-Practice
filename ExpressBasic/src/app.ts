import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();

// middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("😀 logging Middleware");
  next();
});

// json middleware
app.use(express.json());

app.use(catsRouter);

// 404 middleware
// 마지막에 위치함을 통해 위에서부터 해당하는 경로를 찾다가 해당 경로가 없다면 실행되게 된다.
app.use((req, res, next) => {
  console.log("✋ Error Middleware");
  res.send({ error: "404 Not Found Error" });
});

app.listen(8000, () => {
  console.log("Server started");
});
