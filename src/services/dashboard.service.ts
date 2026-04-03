import { prisma } from "../config/db"

export const getSummary = async () => {
  const records = await prisma.record.findMany()

  let totalIncome = 0
  let totalExpense = 0

  const categoryBreakdown: Record<string, number> = {}

  for (const r of records) {
    if (r.type === "INCOME") totalIncome += r.amount
    else totalExpense += r.amount

    if (!categoryBreakdown[r.category]) {
      categoryBreakdown[r.category] = 0
    }

    categoryBreakdown[r.category] += r.amount
  }

  return {
    totalIncome,
    totalExpense,
    netBalance: totalIncome - totalExpense,
    categoryBreakdown
  }
}