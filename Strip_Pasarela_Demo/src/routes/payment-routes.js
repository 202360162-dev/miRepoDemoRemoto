import { Router } from "express";
import {procesarPago} from "../controllers/pagoControllers.js";
const router=Router();

router.get("/pagar", redirigirPago);
router.post("/pagar", procesarPago);
router.get("/exitoso", (req, res) => (res.send("Xie Xie!")));
router.get("/cancelado", (req, res) => (res.send("Pago cancelado")));
export default router;