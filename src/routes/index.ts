import { Router } from "express";
import { testRouter } from "../routes/testdb.routes";
import { cargoRouter } from "../routes/cargo.routes";
import { clienteRouter } from "../routes/cliente.routes";
import { usuarioRouter } from "../routes/usuario.routes";
import { setorRouter } from "../routes/setor.routes";
import { mensagemRouter } from "../routes/mensagem.routes";
import { grupoRouter } from "../routes/grupo.routes";

const router = Router();

router.use(testRouter);
router.use('/usuario'  , usuarioRouter);
router.use('/cargo'   , cargoRouter)
router.use('/mensagem', mensagemRouter)
router.use('/grupo'  , grupoRouter)
router.use('/setor'   , setorRouter)
router.use('/cliente'  , clienteRouter)



export default router;