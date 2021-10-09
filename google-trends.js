import GoogleTrendsAPI from "google-trends-api";

export function getAverageWordSearches(word) {
    return new Promise((resolve) => {
        GoogleTrendsAPI.interestOverTime({keyword: word, startTime: new Date('2016-01-01')})
            .then(function (results) {
                const data = JSON.parse(results);
                let averageSearches = 0;
                let searches = 0;
                for (let x in data.default.timelineData) {
                    averageSearches += data.default.timelineData[x].value[0];
                    searches++;
                }
                averageSearches /= searches;
                resolve(averageSearches);
            })
        /*    .catch(function(err){
                console.error('Oh no there was an error', err);
            })*/;
    })
}