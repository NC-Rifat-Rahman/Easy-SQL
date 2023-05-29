const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 3005;

app.get("/",(req,res) =>
{
    res.send("Hello world from our API");
})

app.listen(port, () =>
{
    console.log(`Listening to port ${port}`);
});