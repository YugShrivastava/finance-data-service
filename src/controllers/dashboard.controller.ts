import { Request, Response } from "express"
import { getSummary } from "../services/dashboard.service"

export const summary = async (_req: Request, res: Response) => {
  try {
    const data = await getSummary()
    res.json(data)
  } catch (err: any) {
    res.status(400).json({ message: err.message })
  }
}