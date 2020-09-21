import express from "express";
import cors from "cors";
import morgan from "morgan";
import paymentsRoutes from "./routes/payments.routes";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/payments", paymentsRoutes);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

export default app;
