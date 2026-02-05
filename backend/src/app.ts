import express from "express";
import cors from "cors";
import aiRoutes from "./routes/ai.routes";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://ai-interview-app-sepia.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());

app.use("/api/ai", aiRoutes);

export default app;
