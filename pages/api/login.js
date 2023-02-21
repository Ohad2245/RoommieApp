import { withSessionRoute } from "lib/config/withSession";
const bcrypt = require("bcrypt");
const db_connect = require("./db");

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req, res) {
    if (req.method === "POST") {
        const { username, password } = req.body;

        //login
        const findUserQuery = "SELECT * FROM user WHERE username = ?";
        const db = db_connect();
        db.query(findUserQuery, [username], async (err, result) => {
            if(err) {throw err;}
            // if username not found
            if(result.length === 0) {
                console.log("User does not exists"); 
                res.status(400).send({ error: 'User does not exists' });
            }
            // if username found 
            else {
                bcrypt.compare(password, result[0].password, async (err, response) => {
                    if(err) {throw err;}
                    // if password of user is correct
                    if(response === true) {
                        //save session
                        req.session.user = {
                            id: result[0].id,
                            username: result[0].username
                        };
                        await req.session.save();
                        console.log("User logged in");
                        console.log(req.session);
                        res.status(200).send({ ok: true });
                    }
                    else {
                        console.log("User does not exists"); 
                        res.status(400).send({ error: 'User does not exists' });
                    }
                })
            }
        });
        db.end();
    } 
    // if not post request
    else {
        console.log("Not a post request");
        res.status(404).send("");
    }
}