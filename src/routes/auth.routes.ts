import { Router } from "express"
import { register, login } from "../controllers/auth.controller"

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - role
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [VIEWER, ANALYST, ADMIN]
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Validation error
 */
 
 /**
  * @swagger
  * /auth/login:
  *   post:
  *     summary: Login user
  *     tags: [Auth]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             required:
  *               - email
  *               - password
  *             properties:
  *               email:
  *                 type: string
  *               password:
  *                 type: string
  *     responses:
  *       200:
  *         description: Returns JWT token
  */

const router = Router()

router.post("/register", register)
router.post("/login", login)

export default router