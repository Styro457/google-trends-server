# Google Trends API Server

**Public NodeJS Server used to retrive google trends data directly on client-side**<br>
using the [google-trends-api](https://www.npmjs.com/package/google-trends-api) package

Hosten on [Heroku](https://herokuapp.com)

## How to use

As of right now, the only avaliable endpoint is /average-word-search<br>
I plan on adding different ones in the future as well as parameters for all of them

## /average-word-search
Returns the number of daily average searches for a word worldwide from 2016-01-01 until the present

### Syntax:
https://google-trends-average.herokuapp.com/average-word-search/{word}

### Example:
```js
const word = "apple";
fetch("https://google-trends-average.herokuapp.com/average-word-search/" + word).then(response => {
  return response.json();
}).then(data => {
  console.log("Average searches for the word apple:" + data);
})
```
```
Average searches for the word apple: 44.12048192771084
```
