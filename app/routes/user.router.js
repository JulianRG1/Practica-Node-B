/* Importamos las Rutas de Express */
import {  Router } from "express";
import * as controllers from "../controllers/user.controller"

const Route = Router();

Route.get('/', (req,res)=>{
    res.send("<h3>Hola Mundo</h3>")
});

Route.get('/user',controllers.FindAllUser);

Route.get('/user/:id',controllers.FindUser);

Route.post("/user/",controllers.InsertUser);
/* Exportamos aqui Las Rutas */
export default Route;