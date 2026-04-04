import { Router } from "express"
import { summary } from "../controllers/dashboard.controller"
import { authMiddleware } from "../middlewares/auth.middleware"
import { authorizeRoles } from "../middlewares/role.middleware"

/**
 * @swagger
 * /dashboard/summary:
 *   get:
 *     summary: Get dashboard summary
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard analytics
 */

const router = Router()

router.get(
  "/summary",
  authMiddleware,
  authorizeRoles("ADMIN", "ANALYST"),
  summary
)

export default router