import Express from "express";
import { getAverageWordSearches } from "./google-trends.js";


const app = Express();
const port = 3000;

app.get("/average-word-search/:word", (req, res) => {
    getAverageWordSearches(req.params.word).then(result => {
        console.log(result);
        if(isNaN(result))
            result = 0;
        res.send(result.toString());
    });
})

app.listen(port, () => console.log("Listening on port " + port));