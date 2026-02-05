import express from "express";
import cors from "cors";
import aiRoutes from "./routes/ai.routes"

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

app.use("/api/ai", aiRoutes);


export default app;