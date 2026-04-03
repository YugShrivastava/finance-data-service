import { Request, Response } from "express"
import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} from "../services/record.service"
import { AuthRequest } from "../middlewares/auth.middleware"

export const create = async (req: AuthRequest, res: Response) => {
  try {
    const { amount, type, category, date, note } = req.body

    const record = await createRecord({
      amount,
      type,
      category,
      date: new Date(date),
      note,
      createdBy: req.user!.id
    })

    res.status(201).json(record)
  } catch (err: any) {
    res.status(400).json({ message: err.message })
  }
}

export const getAll = async (req: Request, res: Response) => {
  try {
    const { type, category } = req.query

    const filters: any = {}

    if (type) filters.type = type
    if (category) filters.category = category

    const records = await getRecords(filters)

    res.json(records)
  } catch (err: any) {
    res.status(400).json({ message: err.message })
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string }

    const record = await updateRecord(id, req.body)

    res.json(record)
  } catch (err: any) {
    res.status(400).json({ message: err.message })
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as { id: string }

    await deleteRecord(id)

    res.json({ message: "Deleted" })
  } catch (err: any) {
    res.status(400).json({ message: err.message })
  }
}