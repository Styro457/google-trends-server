<img align="left" width="80" height="50" src="https://i.pinimg.com/originals/8e/24/03/8e24031175b855889b54bce691617263.png" alt="Icon">

# Google Trends API Server

**Public NodeJS Server used to retrive google trends data directly on client-side in order to avoid cors restrictions**<br>
using the [google-trends-api](https://www.npmjs.com/package/google-trends-api) package

Hosten on [Heroku](https://herokuapp.com)

- Recommended mainly for small projects

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
