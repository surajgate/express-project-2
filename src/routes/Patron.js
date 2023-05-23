const { Router } = require("express");

const db = require("../database");

const router = Router();

router.get("/allPatrons", async (req, res) => {
  const result = await db.promise().query(`select * from patron`);
  res.send(result[0]);
  console.log(result[0]);
});

router.post("/savePatron", (req, res) => {
  const {
    first_name,
    last_name,
    date_of_birth,
    username,
    password,
    email,
    fine_imposed,
  } = req.body;

  db.promise().query(
    `insert into patron (first_name, last_name, date_of_birth, username, password, email, fine_imposed) values ("${first_name}", "${last_name}", "${date_of_birth}", "${username}", "${password}", "${email}", ${fine_imposed})`
  );
console.log(req.body);
  res.send(200);
});

module.exports = router;
