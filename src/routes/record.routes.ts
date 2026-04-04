import { Router } from "express"
import {
  create,
  getAll,
  update,
  remove
} from "../controllers/record.controller"
import { authMiddleware } from "../middlewares/auth.middleware"
import { authorizeRoles } from "../middlewares/role.middleware"

/**
 * @swagger
 * /records:
 *   get:
 *     summary: Get all records
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of records
 */
 
 /**
  * @swagger
  * /records:
  *   post:
  *     summary: Create a record
  *     tags: [Records]
  *     security:
  *       - bearerAuth: []
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             required:
  *               - amount
  *               - type
  *               - category
  *               - date
  *             properties:
  *               amount:
  *                 type: number
  *               type:
  *                 type: string
  *                 enum: [INCOME, EXPENSE]
  *               category:
  *                 type: string
  *               date:
  *                 type: string
  *               note:
  *                 type: string
  *     responses:
  *       201:
  *         description: Record created
  */

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