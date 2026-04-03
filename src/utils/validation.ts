import { z } from "zod"

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["VIEWER", "ANALYST", "ADMIN"])
})

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export const recordSchema = z.object({
  amount: z.number(),
  type: z.enum(["INCOME", "EXPENSE"]),
  category: z.string(),
  date: z.string(),
  note: z.string().optional()
})