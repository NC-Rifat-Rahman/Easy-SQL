
import generate from './generate.js';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 3005;

app.get("/",(req,res) =>
{
    res.send("Hello world from our API");
})

// as generate function is async we also make it async
app.post("/generate", async (req,res) =>
{
    const queryDescription = req.body.queryDescription;

    try{
        const sqlQuery = await generate(queryDescription);
        res.json({ response: sqlQuery });
    }
    catch(error){
        console.error(error);
        res.status(500).send("Internal Server error")
    }
})

app.listen(port, () =>
{
    console.log(`Listening to port ${port}`);
});