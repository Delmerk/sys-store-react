import express from "express";
import deleteUser from "../controllers/user.js";
import { addUser, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router();

// first param / indicando que el get estará en la raiz de la ruta. y second param llama a una function getUsers que estare en el controlador
router.get("/", getUsers);

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
