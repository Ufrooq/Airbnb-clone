import { Router } from "express";
import { loginUser, registerUser } from "../Controllers/userControllers.js";
import { checkCurrentUser } from "../Middlewares/validateToken.js";
import { upload } from "../Controllers/uploadMedia.js";

const router = Router();

router.get("/", checkCurrentUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/uploadMedia", upload);

// router.post("/avatar", validateUser, setAvatar);
// router.get("/", validateUser, getContacts);
// router.get("/logout", logoutUser);

export default router;
