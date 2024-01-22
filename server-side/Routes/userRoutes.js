import { Router } from "express";
import { loginUser, registerUser } from "../Controllers/userControllers.js";
import { checkCurrentUser } from "../Middlewares/validateToken.js";
import { upload, uploadPhotos } from "../Controllers/uploadMedia.js";

const router = Router();

router.get("/", checkCurrentUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/linkMedia", upload);
router.post("/photosMedia", uploadPhotos);

// router.post("/avatar", validateUser, setAvatar);
// router.get("/", validateUser, getContacts);
// router.get("/logout", logoutUser);

export default router;
