import { Router } from "express";
import { getPlaces, getPlacesById, loginUser, registerPlace, registerUser } from "../Controllers/userControllers.js";
import { checkCurrentUser } from "../Middlewares/validateToken.js";
import { upload, uploadPhotos } from "../Controllers/uploadMedia.js";
import multer from "multer";
const photosMiddleWare = multer({ dest: 'Uploads' })
const router = Router();

router.get("/", checkCurrentUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/linkMedia", upload);
router.post("/places", registerPlace);
router.get("/places", getPlaces);
router.get("/places/:id", getPlacesById);
router.post("/photosMedia", photosMiddleWare.array("photos", 50), uploadPhotos);

// router.post("/avatar", validateUser, setAvatar);
// router.get("/", validateUser, getContacts);
// router.get("/logout", logoutUser);

export default router;
