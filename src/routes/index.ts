import { Router } from "express";
import testRouter from "../routes/testdb.routes"

const router = Router();

// router.use('/user', userRoutes)
// router.use('/messages', messagesRoutes)
// router.use('/groups', groupRoutes)
router.use(testRouter);

export default router;