import { Router } from "express";
import { bookPlace, getBooking, getBookings } from "../Controllers/bookingControllers.js";

const router = Router();


router.post("/", bookPlace);
router.get("/", getBookings);
router.get("/:id", getBooking);


export default router;