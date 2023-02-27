const db_connect = require("./db");
const bcrypt = require("bcrypt");

export default function handler(req, res) {
    if (req.method === 'POST') {
        const image = req.body.image;
    
        // validation
        //if empty
        if (image === null) {
            res.status(400).send({ error: 'Image Profile is empty' });   
        } else {
            // insert to db
            const Insertquery =
                "INSERT INTO user (`image`) VALUES (?, ?, ?)";
            const UserExistsQuery =
                "SELECT * FROM user WHERE image = ?";
            
            //connnect db
            const db = db_connect();
            //only insert if user dosen't exist
            db.query(UserExistsQuery, [image, setImage], (err, result) => {
                if (err) {
                    throw err;
                }
        
                if (result.length > 0) {
                    res.status(404).send({ error: "Username or Email already exists" });
                    console.log("Username or Email already exists");
                }
                if (result.length === 0) {
                    const hashedPassword = bcrypt.hashSync(password, 10);
                    //connnect db
                    const db = db_connect();
                    db.query(
                        Insertquery,
                        [hashedPassword, image],
                        (err, result) => {
                        if (err) {
                            throw err;
                        }
                        res.status(200).send({ message: 'User created' });
                        console.log("User created");
                        }
                    );
                    //close db
                    db.end();
                }
            });
            //close db
            db.end();
        }
    }
    // if not post request
    else {
        console.log("Not a post request");
        res.status(404).send("");
    }
}