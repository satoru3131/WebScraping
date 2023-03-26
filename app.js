const PORT = 3000;

const expres = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = expres();




//Let's make scripts for web scraping!!!
const url = "https://search.rakuten.co.jp/search/mall/watch/";
const data = [];

axios(url)
.then(function(responce){
    const htmlParser = responce.data;
    // console.log(htmlParser);

    const $ = cheerio.load(htmlParser);
    $(".searchresultitem", htmlParser).each(function(){
        const title = $(this).find(".title").text();
        const price = $(this).find(".price--OX_YW").text();
        data.push({title, price});
        console.log(data);
    });

})
.catch(function(err){
    console.log(err);
})


app.listen(PORT, function(){
    console.log("The server is running on port " + PORT+ "...");
})