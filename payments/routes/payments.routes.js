import { Router } from "express";
import paymentsCtrl from "../controllers/payments.controller";

//initialize router
const router = Router();

//GET
router.get("/productsByExternal/:id", paymentsCtrl.getProductsByExternal);
router.get("/", paymentsCtrl.getPayments);

// ALL
router.all("*", (req, res) => {
  res.status(404).json({
    message: "La ruta de la solicitud HTTP no es reconocida por el servidor.",
  });
});

export default router;
