import Express from "express";
import { getAverageWordSearches } from "./google-trends.js";


const app = Express();

app.get("/average-word-search/:word", (req, res) => {
    getAverageWordSearches(req.params.word).then(result => {
        console.log(result);
        if(isNaN(result))
            result = 0;
        res.send(result.toString());
    });
})

app.listen(process.env.PORT || 3000);