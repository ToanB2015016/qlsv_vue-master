const con = require("../../config/db/");

class SiteController {
    login(req, res, next) {
        var sql = "SELECT * FROM account WHERE username = ? AND password = ?";
        con.query(sql, [req.body.username, req.body.password], function (err, results) {

            if (results.length <= 0) {
                res.status(400).json({
                    status: "err"
                });
            }
            res.status(200).json({
                status: "ok",
                data: results[0]
            });
        });
    }
    register(req, res, next) {
        const username = req.body.username;
        const password = req.body.password;
        const fullname = req.body.fullname;
        const malop = req.body.malop;
        const sdt = req.body.sdt;

        const sql = "INSERT INTO account (username, password) VALUES (?, ?)";
        con.query(sql, [username, password ], function (err, result) {
            if (err) throw err;
            var insertedId = result.insertId;
            con.query("INSERT INTO student (fullname, malop, sdt, account_id) VALUES (?, ?, ?, ?)",[fullname, malop, sdt, insertedId] ,function (err, result) {
                res.status(200).json({
                    status: "ok",
                    data: "Data inserted successfully"
                });
            })
            
        });
    }

    deleteAccount(req, res, next) {
        var userId = req.params.userId; // Giả sử bạn truyền userId thông qua tham số đường dẫn (URL parameter)

        var sql = "DELETE FROM account WHERE id = ?";
        con.query(sql, [userId], function (err, result) {
            if (err) throw err;
            res.status(200).json({
                status: "ok",
                data: "Data deleted successfully"
            });
        });
    }

}

module.exports = new SiteController();