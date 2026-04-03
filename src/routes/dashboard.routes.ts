import { Router } from "express"
import { summary } from "../controllers/dashboard.controller"
import { authMiddleware } from "../middlewares/auth.middleware"
import { authorizeRoles } from "../middlewares/role.middleware"

const router = Router()

router.get(
  "/summary",
  authMiddleware,
  authorizeRoles("ADMIN", "ANALYST"),
  summary
)

export default router