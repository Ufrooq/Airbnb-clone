import { Router } from "express";
import { bookPlace, getBookings } from "../Controllers/bookingControllers.js";

const router = Router();


router.post("/", bookPlace);
router.get("/", getBookings);

export default router;