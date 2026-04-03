import { Router } from "express"
import {
  create,
  getAll,
  update,
  remove
} from "../controllers/record.controller"
import { authMiddleware } from "../middlewares/auth.middleware"
import { authorizeRoles } from "../middlewares/role.middleware"

const router = Router()

router.get("/", authMiddleware, getAll)

router.post(
  "/",
  authMiddleware,
  authorizeRoles("ADMIN"),
  create
)

router.put(
  "/:id",
  authMiddleware,
  authorizeRoles("ADMIN"),
  update
)

router.delete(
  "/:id",
  authMiddleware,
  authorizeRoles("ADMIN"),
  remove
)

export default router