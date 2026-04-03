import { Response, NextFunction } from "express"
import { AuthRequest } from "./auth.middleware"

export const authorizeRoles =
  (...allowedRoles: string[]) =>
  (req: AuthRequest, res: Response, next: NextFunction) => {
    const user = req.user

    if (!user || !allowedRoles.includes(user.role)) {
      return res.status(403).json({ message: "Forbidden" })
    }

    next()
  }