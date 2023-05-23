const { Router } = require('express');
const router = Router();

const db = require('../database');

router.get('/allIssuedBooks', async (req, res) => {
    const result = await db
      .promise()
      .query("select * from issued_book_details");

      res.send(result[0]);
});

router.post('/saveIssueBook', (req, res) => {
    const {
        book_id,
        patron_id,
        issued_date,
        return_date
    } = req.body;

    db.promise().query(`insert into issued_book_details (book_id,
        patron_id,
        issued_date,
        return_date) values (${book_id}, ${patron_id}, "${issued_date}", "${return_date}")`);

        res.send(200);
})

module.exports = router;