// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "my-secret-pw",
//   database: "pregister",
//   insecureAuth: true,
// });

// app.post("/pregister", (req, res) => {
//   const sql = "INSERT INTO loginp (`name`, `email`, `password`) VALUES (?)";
//   console.log(req.body);
//   const values = [req.body.name, req.body.email, req.body.password];
//   db.query(sql, [values], (err, data) => {
//     console.log(err, data);
//     if (err) {
//       return res.json(err);
//     }
//     return res.json(data);
//   });
// });

// //Content page
// app.post("/register", (req, res) => {
//   const sql = "INSERT INTO feedback (`title`, `content`) VALUES (?)";
//   console.log(req.body);
//   const values = [req.body.title, req.body.content];
//   db.query(sql, [values], (err, data) => {
//     console.log(err, data);
//     if (err) {
//       return res.json(err);
//     }
//     return res.json(data);
//   });
// });

// app.post("/loginp", (req, res) => {
//   const sql = "SELECT * FROM loginp WHERE `email` =? AND `password` = ? ";

//   db.query(sql, [req.body.email, req.body.password], (err, data) => {
//     if (err) {
//       return res.json("Error");
//     }
//     if (data.length > 0) {
//       return res.json("Success");
//     } else {
//       return res.json("Fail");
//     }
//   });
// });

// app.listen(8081, () => {
//   console.log("listening");
// });

//

// server.js

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "my-secret-pw",
  database: "pregister",
  insecureAuth: true,
});

app.get("/register", (req, res) => {
  const sql = "SELECT * FROM feedback";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.status(200).json(result);
  });
});

app.post("/register", (req, res) => {
  const sql = "INSERT INTO feedback (`title`, `content`) VALUES (?, ?)";
  const { title, content } = req.body;
  db.query(sql, [title, content], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.status(200).json({ id: result.insertId, title, content });
  });
});

app.delete("/register/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM feedback WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.status(200).json({ message: "Note deleted successfully" });
  });
});

app.post("/pregister", (req, res) => {
  const sql = "INSERT INTO loginp (`name`, `email`, `password`) VALUES (?)";
  console.log(req.body);
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    console.log(err, data);
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

//Content page
app.post("/register", (req, res) => {
  const sql = "INSERT INTO feedback (`title`, `content`) VALUES (?)";
  console.log(req.body);
  const values = [req.body.title, req.body.content];
  db.query(sql, [values], (err, data) => {
    console.log(err, data);
    if (err) {
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/loginp", (req, res) => {
  const sql = "SELECT * FROM loginp WHERE `email` =? AND `password` = ? ";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Fail");
    }
  });
});

app.listen(8081, () => {
  console.log("listening");
});
