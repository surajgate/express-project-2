const { Router } = require('express');
const db = require('../database');

const router = Router();

router.get('/allBooks', async (req, res) => {
    const result = await db.promise().query(`SELECT * FROM book`);
    res.send(result[0]);
});

router.post('/saveBook', (req, res) => {
    const {
        book_name,
        author,
        category,
        publisher,
        description,
        no_of_copies
    } = req.body;

    db.promise().query(`insert into book (book_name,
        author,
        category,
        publisher,
        description,
        no_of_copies) values ("${book_name}", "${author}", "${category}", "${publisher}", "${description}", ${no_of_copies} )`);

        res.send(200);
});

module.exports = router;