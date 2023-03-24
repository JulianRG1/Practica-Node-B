/* Importamos las Rutas de Express */
import {  Router } from "express";
import * as controllers from "../controllers/user.controller"

const Route = Router();

Route.get('/', (req,res)=>{
    res.send("<h3>Hola Mundo</h3>")
});

//Ruoutes del CRUD
Route.get('/user',controllers.FindAllUser);

Route.get('/user/:id',controllers.FindUser);

Route.post("/user/",controllers.InsertUser);

Route.put("/user",controllers.UpdateUser);

Route.delete("/user/:id",controllers.DeleteUser);

/* Exportamos aqui Las Rutas */
export default Route;