import { Cat, CatType } from "./cats.models";
import { Router } from "express";
import {
  readAllcat,
  readCat,
  createCat,
  updateCat,
  updatePartialCat,
  deleteCat,
} from "./cats.service";

const router = Router();

// READ
/*
 * READ
 * 고양이 전체 데이터 조회 api
 */
// router.get("/cats", (req, res) => {
//   try {
//     const cats = Cat;
//     res.status(200).send({
//       success: true,
//       data: {
//         cats,
//       },
//     });
//   } catch (error: any) {
//     res.status(400).send({
//       success: false,
//       error: error.message,
//     });
//   }
// });
router.get("/cats", readAllcat);

/*
 * READ
 * 특정 고양이 데이터 조회
 */
// router.get("/cats/:id", (req, res) => {
//   try {
//     const cat = Cat.find((cat) => {
//       return cat.id === req.params.id;
//     });
//     res.status(200).send({
//       success: true,
//       data: cat,
//     });
//   } catch (error: any) {
//     res.status(400).send({
//       success: false,
//       error: error.message,
//     });
//   }
// });
router.get("/cats/:id", readCat);

// CREATE
/*
 * 새로운 고양이 추가 api
 */
// router.post("/cats", (req, res) => {
//   try {
//     const data = req.body;
//     Cat.push(data); // create
//     res.status(200).send({
//       success: true,
//       data: data,
//     });
//   } catch (error: any) {
//     res.send({
//       success: false,
//       error: error.message,
//     });
//   }
// });
router.post("/cats", createCat);

// UPDATE
/*
 * 고양이 정보 수정 api
 */
// router.put("/cats/:id", (req, res) => {
//   try {
//     const params = req.params;
//     const body = req.body;
//     let result;
//     Cat.forEach((cat) => {
//       if (cat.id === params.id) {
//         cat = body;
//         result = cat;
//       }
//     });
//     res.status(200).send({
//       success: true,
//       data: {
//         cat: result,
//       },
//     });
//   } catch (error: any) {
//     res.send({
//       success: false,
//       error: error.message,
//     });
//   }
// });
router.put("/cats/:id", updateCat);

/*
 * 고양이 데이터 부분적 업데이트
 */
// router.patch("/cats/:id", (req, res) => {
//   try {
//     const params = req.params;
//     const body = req.body;
//     let result;
//     Cat.forEach((cat) => {
//       if (cat.id === params.id) {
//         cat = { ...cat, ...body };
//         result = cat;
//       }
//     });
//     res.status(200).send({
//       success: true,
//       data: {
//         cat: result,
//       },
//     });
//   } catch (error: any) {
//     res.status(400).send({
//       success: false,
//       error: error.message,
//     });
//   }
// });
router.patch("/cats/:id", updatePartialCat);

// DELETE
/*
 * 고양이 정보 삭제 api
 */
// router.delete("/cats/:id", (req, res) => {
//   try {
//     const params = req.params;
//     const newCat = Cat.filter((cat) => cat.id !== params.id);
//     res.status(200).send({
//       success: true,
//       data: newCat,
//     });
//   } catch (error: any) {
//     res.status(400).send({
//       success: false,
//       error: error.message,
//     });
//   }
// });
router.delete("/cats/:id", deleteCat);

export default router;
