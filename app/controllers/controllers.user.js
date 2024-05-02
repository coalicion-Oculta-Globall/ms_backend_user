import { success } from "../message/browser.js";
import pool from "../config/db.mysql.js";

export const crearUsuario = (req, res)=>{
    const dato = req.body;
    console.log(dato);
    success(req, res, 201,"post Ha ingresado un dato");
};
export const mostrarUsuario = async(req, res)=>{

    const respueta = await pool.query("select * from clientes");
    console.log(respueta);
    success(req, res, 200, respueta[0]);
};
export const modificarUsuario = (req, res)=>{
    const dato = req.body;
    success(req, res, 200,"put Ha modificado un dato");
};
export const eliminarUsuario = (req, res)=>{
    const dato = req.body;
    success(req, res, 200,"delete ha eliminado un dato");
};