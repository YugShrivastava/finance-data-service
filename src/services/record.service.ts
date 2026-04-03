import { prisma } from "../config/db"

export const createRecord = async (data: {
  amount: number
  type: "INCOME" | "EXPENSE"
  category: string
  date: Date
  note?: string
  createdBy: string
}) => {
  return prisma.record.create({
    data
  })
}

export const getRecords = async (filters: any) => {
  return prisma.record.findMany({
    where: filters,
    orderBy: { date: "desc" }
  })
}

export const updateRecord = async (id: string, data: any) => {
  return prisma.record.update({
    where: { id },
    data
  })
}

export const deleteRecord = async (id: string) => {
  return prisma.record.delete({
    where: { id }
  })
}