import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.routes"
import recordRoutes from "./routes/record.routes"
import dashboardRoutes from "./routes/dashboard.routes"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/auth", authRoutes)
app.use("/records", recordRoutes)
app.use("/dashboard", dashboardRoutes)

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})