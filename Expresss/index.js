import express from "express";
import { home } from "./controller/friends.controller.js";
import { friendsRouter } from "./routes/friends.router.js";
const app = express();
const PORT = 3000;
// first middleware
app.use(express.json());
app.get("/", home);
app.use("/friends", friendsRouter);
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
