


///////////////////////////////////
const express = require("express");
const bodyParser = require("body-parser");


const {
  insertUser,
  getUserId,
  addFavorite,
  getFavorites,
  removeFavorite,
  apiKey,
} = require("./db_mysql/modals.js");
const Axios = require("axios");

let app = express();

app.use(bodyParser.json());
app.use(express.static("./client/dist"));

let port = process.env.PORT || 3000;
let apiAccessKey = process.env.APIKEY || apiKey;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening on port: ${port}`);
  }
});


app.get("/favorites", (req, res) => {
  // getFavorites(req.query.userName, (results) => {
  //   let savedLinks = [];

  //   for (linkObj of results) {
  //     savedLinks.push({ link: linkObj.link, name: linkObj.name });
  //   }

  //   res.status(200).send(savedLinks);
  // });
});

app.get("/youtubeSearch", (req, res) => {
  Axios.get(`
    https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=10&q=${req.query.query}&key=${apiAccessKey}`
  )
    .then(({ data }) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/users", (req, res) => {
  let userName = gmailTrimmer(req.body.email);
  getUserId(userName, (userId) => {
    if (!userId) {
      insertUser(userName, true);
      res.status(201).send(userName);
    } else {
      res.status(201).send(userName);
    }
  });
});

app.post("/addFavorite", (req, res) => {
  let { userName, link, name } = req.body;
 
  getUserId(userName, (userId) => {
   
    addFavorite({ userId, link, name });

    getFavorites(userName, (results) => {
      let savedLinks = [];

      for (linkObj of results) {
        savedLinks.push({ link: linkObj.link, name: linkObj.name });
      }

      res.status(201).send(savedLinks);
    });
  });
});
app.delete("/deleteFavorites", (req, res) => {
  removeFavorite(req.query.link);
});



const gmailTrimmer = (email) => {
  let length = email.length - 10;

  let trimmedEmail = email.slice(0, length);

  return trimmedEmail;
};