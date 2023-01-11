const express = require("express");
const jsonfile = require('jsonfile');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const port = 4000;
const historyFile = './history.json';

app.get("/", (req, res) => {
    console.log("get");
    jsonfile.readFile(historyFile)
        .then(storedHistory => res.json(storedHistory))
        .catch(() => res.json([]));
});

app.post("/", (req, res) => {
    jsonfile.readFile(historyFile)
        .then(history => {
            history.push(req.body);
            jsonfile.writeFile(historyFile, history, {spaces: 2})
                .then(() => res.json(req.body))
                .catch((err) => res.status(500).send(err));
        })
        .catch(() => {
            jsonfile.writeFile(historyFile, [req.body], {spaces: 2})
                .then(() => res.json(req.body))
                .catch(err => res.status(500).send(err))
        })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
