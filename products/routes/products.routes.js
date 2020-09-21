import { Router } from "express";
import productsCtrl from "../controllers/products.controller";

//initialize router
const router = Router();


//GET
router.get("/:id", productsCtrl.getProductList);
router.get("/", productsCtrl.getProducts);

// ALL
router.all("*", (req, res) => {
  res.status(404).json({
    message: "La ruta de la solicitud HTTP no es reconocida por el servidor.",
  });
});

export default router;
