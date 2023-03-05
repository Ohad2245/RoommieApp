const db_connect = require("./db");

export default function handler(req, res) {
    if (req.method === 'POST') {
        const user = req.session.user;
        if(!user) {
            console.log("No user connected");
            res.status(404).send("");
        }
        else {
            const user_id = user.id;   // from session
            const profile = req.body.profile;
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const gender = req.body.gender;
            const birthday = req.body.birthday;
            const country = req.body.country;
            const bio = req.body.bio;
            

            //validation
            //if empty
            if (profile === null) {
                console.log('Profile Image is empty');
                res.status(400).send({ error: 'Profile Image is empty' });   
            } else if (firstName === null) {
                console.log('First Name is empty');
                res.status(400).send({ error: 'First Name is empty' });   
            } else if (lastName === null) {
                console.log('Last Name is empty');
                res.status(400).send({ error: 'Last Name is empty' });   
            } else if (gender === null) {
                console.log('Gender is empty');
                res.status(400).send({ error: 'Gender is empty' });   
            } else if (birthday === null) {
                console.log('Birthday is empty');
                res.status(400).send({ error: 'Birthday is empty' });   
            } else if (country === null) {
                console.log('Country is empty');
                res.status(400).send({ error: 'Country is empty' });   
            } else if (bio === null) {
                console.log('Bio is empty');
                res.status(400).send({ error: 'Bio is empty' });   
            } else {
                // insert to db user_profile table
                const Insertquery = "INSERT INTO user_profile (`user_id`, `picture`, `first_name`, `last_name`, `gender`, `birthday`, `country`, `bio`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
                
                //connnect db
                const db = db_connect();
                db.query(
                    Insertquery,
                    [user_id, profile, firstName, lastName, gender, birthday, country, bio],
                    (err, result) => {
                        if (err) {
                            throw err;
                        }
                        res.status(200).send({ message: 'Profile created' });
                        console.log("Profile created");
                    }
                );
                //close db
                db.end();
            }
        }
    }
    // if not post request
    else {
        console.log("Not a post request");
        res.status(404).send("");
    }
}