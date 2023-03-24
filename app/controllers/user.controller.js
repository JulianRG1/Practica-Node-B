import res from "express/lib/response";
import {pool} from "../config/db/db"

export const FindAllUser = async (req,res)=>{
    try {
        const [rows] = await pool.query('CALL spFindAllUser()');
            res.json(rows);

    } catch (error) {
        console.error("Lo siento ah ocurrido un error"+error);
    }
}

export const FindUser = async (req,res)=>{
    const id = req.params.id;

    try {
        const [rows] = await pool.query(`CALL spFindUser(${id})`);
            res.json(rows);

    } catch (error) {
        console.error("Lo siento ah ocurrido un error"+error);
    }
}

export const InsertUser = async (req,res)=>{

    const Name= req.body.name;

    try {
        const result = await pool.query(`CALL spInsertUser('${Name}')`);
            res.json(result);

    } catch (error) {
        console.error(error);
    }
}

export const DeleteUser = async (req,res)=>{
    
    const id = req.params.id;

    try {
        const result = await pool.query(`CALL spDeleteUser(${id})`);

        if(result[0].affectedRows ==1)
            res.json(result);

        else
            res.json({"error":"No Borró"}); 

    } catch (error) {
        console.error(error);
    }
}

export const UpdateUser = async (req,res)=>{

    const  id= req.body.id;
    const  name= req.body.name;

    try {
        const result = await pool.query(`CALL spUpdateUser(${id},'${name}')`);

        if(result[0].affectedRows != 0)
            res.json(result);

        else
            res.json({"error":"No actualizó"}); 

    } catch (error) {
        console.error(error);
    }
    
}


