import { prisma } from "../config/db"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/jwt"

export const registerUser = async (
  email: string,
  password: string,
  role: "VIEWER" | "ANALYST" | "ADMIN"
) => {
  const existing = await prisma.user.findUnique({
    where: { email }
  })

  if (existing) {
    throw new Error("User already exists")
  }
  if (!email || !password || !role) {
    throw new Error("Missing fields")
  }
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role
    }
  })

  return user
}

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user) {
    throw new Error("Invalid credentials")
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error("Invalid credentials")
  }

  const token = generateToken({
    id: user.id,
    role: user.role
  })

  return { user, token }
}