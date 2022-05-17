import { resolveShowConfigPath } from "@babel/core/lib/config/files";
import res from "express/lib/response";
import connection from "../config/connectDB"


let getHomepage = (req, res) => {
    //logic
    let data = [];

    // simple query
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            results.map((row) => {
                data.push({
                    id: row.id,
                    firstName: row.firstName,
                    lastName: row.lastName,
                    email: row.email,
                    address: row.address,
                })
            });
            return res.render('index.ejs', { dataUser: data })
        }
    );

}

// hàm module.exports dùng để export nhiều hàm
module.exports = {
    getHomepage
}
