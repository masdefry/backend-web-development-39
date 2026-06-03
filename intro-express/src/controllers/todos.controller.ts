/*
    CONTROLLER  : Untuk melakukan request dan mengirimkan response
*/

// SERVICES, REPOSITORY, HELPERS

import { Request, Response } from 'express';
import fs from 'fs'; // File System : Membaca dan menulis ke sebuah file
import path from 'path';
const dirPath = path.join(__dirname, 'database');

export const TodosController = {
  async create(req: Request, res: Response) {
    const data = req?.body;

    const todoList = JSON.parse(
      fs.readFileSync(`${dirPath}/todos.json`, 'utf-8'),
    );
    todoList?.push({ ...data, id: Date.now() });

    fs.writeFileSync(`${dirPath}/todos.json`, JSON.stringify(todoList));

    res.status(201).json({
      success: true,
      message: 'Todo created successfully',
      data: data,
    });
  },

  async getAll(req: Request, res: Response) {
    const todoList = JSON.parse(
      fs.readFileSync(`${dirPath}/todos.json`, 'utf-8'),
    );

    res.status(200).json({
      success: true,
      message: 'Todo retrived successfully',
      data: todoList,
    });
  },

  async update(req: Request, res: Response) {
    const data = req?.body; // { title, date }
    const params = req?.params;

    const todoList = JSON.parse(
      fs.readFileSync(`${dirPath}/todos.json`, 'utf-8'),
    );

    const indexData = todoList?.findIndex((todo: any) => {
      return todo?.id == params?.id;
    });

    if (indexData === -1) {
      res.status(404).json({
        success: false,
        message: `Todo with id=${params?.id} not found`,
        data: {},
      });
    }

    todoList[indexData] = { ...data, id: Number(params?.id) };

    fs.writeFileSync(`${dirPath}/todos.json`, JSON.stringify(todoList));

    res.status(200).json({
      success: true,
      message: `Todo with id=${params?.id} updated successfully`,
      data: data,
    });
  },
};
