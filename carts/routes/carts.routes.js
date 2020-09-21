import { Router } from "express";
import cartsCtrl from "../controllers/carts.controller";

//initialize router
const router = Router();

//GET
router.get("/productsPurchaseByUser/:id", cartsCtrl.getProductsByUser);
router.get("/productsByUser/:id", cartsCtrl.getProductsByUser);
router.get("/", cartsCtrl.getCarts);

// ALL
router.all("*", (req, res) => {
  res.status(404).json({
    message: "La ruta de la solicitud HTTP no es reconocida por el servidor.",
  });
});

export default router;
