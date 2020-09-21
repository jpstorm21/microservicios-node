import { Router } from "express";
import userCtrl from "../controllers/user.controller";

//initialize router
const router = Router();


//GET
router.get("/", userCtrl.getUserList);

// ALL
router.all("*", (req, res) => {
  res.status(404).json({
    message: "La ruta de la solicitud HTTP no es reconocida por el servidor.",
  });
});

export default router;
