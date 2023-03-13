const db_connect = require("./db");
import { withSessionRoute } from "lib/config/withSession";

export default withSessionRoute(handler);

async function handler (req, res) {
//export default function handler (req, res) {
  const user = req.session.user;
  //try {
    //console.log(req.data);
    //const user = req.data.username;
    if(!user) {
        console.log("No user connected");
        res.statusCode = 200; //400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({value: -1}));
    }
    else {
      const user_id = user.id;
      console.log("123", user_id, user);
      const UserExistsQuery = "SELECT * FROM user_profile WHERE id_user = ?";
      const db = db_connect();

      db.query(UserExistsQuery, [user_id], (err, result) => {
        console.log("result.length", result.length);
        if (err) {
          throw err;
        }
        else if (result.length > 0) {
          console.log("User already has profile");
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({value: 1}));
        }
        else if (result.length === 0) {
          console.log("User doesn't have profile");
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({value: 0}));
        }
        else {
          res.statusCode = 200; //400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({value: -1}));
        }
      });
    }
  /*} catch (error) {
    console.log("No user connected");
    res.statusCode = 200; //400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({value: -1}));
  }*/
}
