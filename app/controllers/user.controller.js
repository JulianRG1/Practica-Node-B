import {pool} from "../config/db/db"

export const FindAllUser = async (req,res)=>{
    try {
        const [rows] = await pool.query('CALL spFindAllUser()');
            res.json(rows);

    } catch (error) {
        console.error("Lo siento ah ocurrido un error");
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
        console.error("Lo siento ah ocurrido un error"+error);
    }
}

export const DeleteUser = async (req,res)=>{
    
}

export const UpdateUser = async (req,res)=>{
    
}


