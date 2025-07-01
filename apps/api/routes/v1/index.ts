import { Router } from "express";
import userRouter from "./user";
import websiteRouter from "./website";

const router = Router();

router.use('/users', userRouter);
router.use('/websites', websiteRouter);

export default router;