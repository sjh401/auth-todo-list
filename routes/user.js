import { Router } from "express"

const router = Router();

// sign up : post
router.post("/sign-up")
// sign in : post
router.post("/sign-in")
// verify : get
router.get("/verify")
// change pass : post
router.post("/change-password")

export default router;