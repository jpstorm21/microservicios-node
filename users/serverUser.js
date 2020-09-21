import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/user.routes";

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

export default app;
