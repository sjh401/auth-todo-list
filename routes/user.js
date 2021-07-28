import { Router } from "express"
import { signIn, signUp, verify } from "../controllers/users.js";


const router = Router();

// sign up : post
router.post("/sign-up", signUp)
// sign in : post
router.post("/sign-in", signIn)
// verify : get
router.get("/verify", verify)
// change pass : post
router.post("/change-password")

export default router;