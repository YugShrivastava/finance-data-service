import jwt from "jsonwebtoken"

export const generateToken = (payload: { id: string; role: string }) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET missing")
  }

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d"
  })
}

export const verifyToken = (token: string) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET missing")
  }

  return jwt.verify(token, process.env.JWT_SECRET)
}