import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectUsingMongoose } from "./src/config/mongooseConfig.js";
import userRouter from "./src/features/user/user.routes.js";
import teamRouter from "./src/features/team/team.routes.js";


import cors from 'cors';

const server = express();

// ✅ Add CORS with specific options
server.use(cors({
  origin: '*', // Frontend's Vite dev server
  credentials: true               // Allow cookies/auth headers if needed
}));

server.use(express.json());

server.use('/users', userRouter);
server.use('/teams', teamRouter);


server.listen(4000, () => {
  console.log("✅ Server is running at 4000");
  connectUsingMongoose();
});