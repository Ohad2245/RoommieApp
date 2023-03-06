const db_connect = require("./db");
import { withSessionRoute } from "lib/config/withSession";

export default withSessionRoute(handler);

async function handler(req, res) {
    if (req.method === 'POST') {
        const user = req.session.user;
        if(!user) {
            console.log("No user connected");
            res.status(400).send("No user connected");
        }
        else if(profileStage(user) === 1) {
            console.log("User already has profile");
            res.status(400).send("User already has profile");
        }
        else {
            console.log(req.body);
            const user = req.session.user;
            const user_id = user.id;   // from session
            const profileImage = req.body.profile;
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const gender = req.body.gender;
            const birthday = req.body.birthday;
            const country = req.body.country;
            const bio = req.body.bio;
            console.log("user: ", user, "\nuser_id: " + user_id + "\nprofileImage: ", profileImage, "\nfirstName: " + firstName + "\nlastName: " + lastName + "\ngender: " + gender + "\nbirthday: " + birthday + "\ncountry: " + country + "\nbio: " + bio);
            
            //validation
            //if empty
            if (profileImage === "") {
                console.log('Profile Image is empty');
                res.status(400).send({ error: 'Profile Image is empty' });   
            } else if (firstName === "") {
                console.log('First Name is empty');
                res.status(400).send({ error: 'First Name is empty' });   
            } else if (lastName === "") {
                console.log('Last Name is empty');
                res.status(400).send({ error: 'Last Name is empty' });   
            } else if (gender === "") {
                console.log('Gender is empty');
                res.status(400).send({ error: 'Gender is empty' });   
            } else if (birthday === "") {
                console.log('Birthday is empty');
                res.status(400).send({ error: 'Birthday is empty' });   
            } else if (country === "") {
                console.log('Country is empty');
                res.status(400).send({ error: 'Country is empty' });   
            } else if (bio === "") {
                console.log('Bio is empty');
                res.status(400).send({ error: 'Bio is empty' });   
            } else {
                //fix gender to int
                const intGender = (gender === "male") ? 0:1;
                //fix date without time
                const dateBirthday = birthday.substring(0, 10);
                console.log(dateBirthday);
                // insert to db user_profile table
                //const Insertquery = "INSERT INTO user_profile (`id_user`, `picture`, `first_name`, `last_name`, `gender`, `birthday`, `country`, `bio`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
                const Insertquery = "INSERT INTO user_profile (`id_user`, `first_name`, `last_name`, `gender`, `birthday`, `country`, `bio`) VALUES (?, ?, ?, ?, ?, ?, ?)";
                
                //connnect db
                const db = db_connect();
                db.query(
                    Insertquery,
                    //[user_id, profileImage, firstName, lastName, intGender, birthday, country, bio],
                    [user_id, firstName, lastName, intGender, dateBirthday, country, bio],
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