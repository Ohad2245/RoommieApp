const db_connect = require("./db");
const bcrypt = require("bcrypt");

export default function handler(req, res) {
    if (req.method === 'POST') {
        const username = req.body.username;
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;
        const email = req.body.email;
        
        // validation
        //if empty
        if (email == "") {
            res.status(400).send({ error: 'Email is empty' });   
            console.log("Email is empty");
        } else if (username == "") {
            res.status(400).send({ error: 'Username is empty' });   
            console.log("Username is empty");
        } else if (password == "") {
            res.status(400).send({ error: 'Password is empty' });   
            console.log("Password is empty");
        } 
        // passwords not maching
        else if (confirmPassword != password) {
            res.status(400).send({ error: "Passwords don't match" });   
            console.log("Passwords don't match");
        } 
        // Invalid email
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            res.status(400).send({ error: "Invalid email address" });   
            console.log("Invalid email address");
        } else {
            // insert to db
            const Insertquery =
                "INSERT INTO user (`username`, `password`, `email`) VALUES (?, ?, ?)";
            const UserExistsQuery =
                "SELECT * FROM user WHERE username = ? OR email = ?";
            
            //connnect db
            const db = db_connect();
            //only insert if user dosen't exist
            db.query(UserExistsQuery, [username, email], (err, result) => {
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
                        [username, hashedPassword, email],
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