import { Router } from "express";
import { getAllPlaces, placeHost } from "../Controllers/placeControllers.js";
const router = Router();


router.get("/", getAllPlaces);
router.get("/host/:id", placeHost);

export default router;