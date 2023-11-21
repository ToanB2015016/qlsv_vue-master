const con = require("../../config/db/");

class StudentController {
    all(req, res, next) {
        var sql = "SELECT * FROM student";
        con.query(sql, function (err, results) {
            res.status(200).json({
                status: "ok",
                data: results
            });
        });
    }
    getOne(req, res, next) {
        var sql = "SELECT * FROM student WHERE id = ?";
        con.query(sql,[req.params.studentId] ,function (err, results) {
            if (err) throw err;
            res.status(200).json({
                status: "ok",
                data: results
            });
        });
    }
    updateAccount(req, res, next) {
        var userId = req.params.userId; // Giả sử bạn truyền userId thông qua tham số đường dẫn (URL parameter)
        var username = req.body.username;
        var password = req.body.password;

        var sql = "UPDATE account SET username = ?, password = ? WHERE id = ?";
        con.query(sql, [username, password, userId], function (err, result) {
            if (err) throw err;
            res.status(200).json({
                status: "ok",
                data: "Data updated successfully"
            });
        });
    }

    
}

module.exports = new StudentController();