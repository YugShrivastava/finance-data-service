import { Request, Response } from "express"
import { registerUser, loginUser } from "../services/auth.service"
import { registerSchema, loginSchema } from "../utils/validation"

export const register = async (req: Request, res: Response) => {
  try {
    const parsed = registerSchema.parse(req.body)
    const { email, password, role } = parsed

    const user = await registerUser(email, password, role)

    res.status(201).json(user)
  } catch (err: any) {
    res.status(400).json({ message: err.message })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const parsed = loginSchema.parse(req.body)
    const { email, password } = parsed

    const data = await loginUser(email, password)

    res.json(data)
  } catch (err: any) {
    res.status(400).json({ message: err.message })
  }
}