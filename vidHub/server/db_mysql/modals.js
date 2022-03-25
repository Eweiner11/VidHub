const {connection} = require("./database")

module.exports = {
    insertUser: (userName,isLoggedIn) => {
      let inserUserQuery = `insert ignore into Users ( userName ) values ( "${userName}")`;
      connection.query(inserUserQuery, (err, results) => {
        if (err) {
          throw err;
        }
      });
    },
    getUserId: (userName, callback) => {
      let getUserIdQuery = `Select id from Users WHERE userName = "${userName}"`;
      connection.query(getUserIdQuery, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          let userId = results[0];
          if (userId) {
            callback(userId.id);
          } else {
            callback(false);
          }
        }
      });
    },
    addFavorite: ({ userId, link,name }) => {
      let addFavoriteQuery = `insert into favorites (UserId, link, name) values(${userId},"${link}","${name}")`;
      connection.query(addFavoriteQuery, (err, result) => {
        if (err) {
          throw err;
        } else {
          console.log("favorite added to database");
        }
      });
    },
    getFavorites: (userName, callback) => {
      
      let getFavoritesQuery = `select link,name from favorites WHERE userId = (select id from Users WHERE userName = "${userName}")`;
      connection.query(getFavoritesQuery, (err, results) => {
        if (err) {
          throw err;
        } else {
        
          callback(results);
        }
      });
    },
    removeFavorite: (link) => {
      let removeFavoriteQuery = `delete from favorites where link = "${link}"`;
      connection.query(removeFavoriteQuery, (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log("favorite has been succesfully removed");
        }
      });
    },

    
    apiKey:"AIzaSyBgkvNaMMODvzB56jffz-mwXk7MbsZ1E40"
  };