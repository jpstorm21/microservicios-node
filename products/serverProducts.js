import express from "express";
import cors from "cors";
import morgan from "morgan";
import productsRoutes from "./routes/products.routes";

const app = express();

app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/products", productsRoutes);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

export default app;
