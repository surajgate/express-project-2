const express = require("express");
const app = express();
const port = 3000;

const patronRoute = require('./routes/Patron');
const bookRoute = require('./routes/Book');
const issueBookRoute = require('./routes/IssueBookDetails');

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use('/patron', patronRoute);
app.use('/book', bookRoute);
app.use('/issueBook', issueBookRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
