import { Request, Response } from "express";
import { Cat, CatType } from "./cats.models";

// READ
/*
 * READ
 * 고양이 전체 데이터 조회 api
 */
export const readAllcat = (req: Request, res: Response) => {
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
};

/*
 * READ
 * 특정 고양이 데이터 조회
 */
export const readCat = (req: Request, res: Response) => {
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
};

// CREATE
/*
 * 새로운 고양이 추가 api
 */
export const createCat = (req: Request, res: Response) => {
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
};

// UPDATE
/*
 * 고양이 정보 수정 api
 */
export const updateCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.send({
      success: false,
      error: error.message,
    });
  }
};

/*
 * 고양이 데이터 부분적 업데이트
 */
export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// DELETE
/*
 * 고양이 정보 삭제 api
 */
export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);
    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
