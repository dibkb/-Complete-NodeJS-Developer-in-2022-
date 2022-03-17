import express from "express";
import {
  addFriend,
  getFriends,
  getSingleFriend,
} from "../controller/friends.controller.js";
export const friendsRouter = express.Router();
friendsRouter.post("/", addFriend);
friendsRouter.get("/", getFriends);
friendsRouter.get("/:id", getSingleFriend);
