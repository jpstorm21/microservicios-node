import { Router } from "express";
import orderCtrl from "../controllers/orders.controller";

//initialize router
const router = Router();

//GET
router.get("/user/:id", orderCtrl.getOrderByUser);
router.get("/", orderCtrl.getOrders);

// ALL
router.all("*", (req, res) => {
  res.status(404).json({
    message: "La ruta de la solicitud HTTP no es reconocida por el servidor.",
  });
});

export default router;
