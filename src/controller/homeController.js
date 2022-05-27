import { resolveShowConfigPath } from "@babel/core/lib/config/files";
import res, { json } from "express/lib/response";
import pool from "../config/connectDB"

let getHomepage = async (req, res) => {

    // query database
    const [rows, fields] = await pool.execute('SELECT * FROM users ');
    return res.render('index.ejs', { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    const [user] = await pool.execute(`select * from users where id = ?`, [userId])
    return res.send(JSON.stringify(user))
}

// hàm module.exports dùng để export nhiều hàm
module.exports = {
    getHomepage,
    getDetailPage
}
