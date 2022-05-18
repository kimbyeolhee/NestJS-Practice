import * as express from "express";
import { Cat, CatType } from "./app.models";

const app: express.Express = express();

// middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("😀 logging Middleware");
  next();
});

// json middleware
app.use(express.json());

// READ
/*
 * READ
 * 고양이 전체 데이터 조회 api
 */
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

/*
 * READ
 * 특정 고양이 데이터 조회
 */
app.get("/cats/:id", (req, res) => {
  try {
    const cat = Cat.find((cat) => {
      return cat.id === req.params.id;
    });
    res.status(200).send({
      success: true,
      data: cat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// CREATE
/*
 * 새로운 고양이 추가 api
 */
app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    Cat.push(data); // create
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error: any) {
    res.send({
      success: false,
      error: error.message,
    });
  }
});

// 404 middleware
// 마지막에 위치함을 통해 위에서부터 해당하는 경로를 찾다가 해당 경로가 없다면 실행되게 된다.
app.use((req, res, next) => {
  console.log("✋ Error Middleware");
  res.send({ error: "404 Not Found Error" });
});

app.listen(8000, () => {
  console.log("Server started");
});
