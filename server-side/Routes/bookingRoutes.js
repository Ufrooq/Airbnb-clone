import { Router } from "express";
import { bookPlace } from "../Controllers/bookingControllers.js";

const router = Router();


router.post("/", bookPlace)

export default router;