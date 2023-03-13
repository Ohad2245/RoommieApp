    //   googleMapsApiKey="AIzaSyCkxxy1RdAq21NHwKn8gWN8TApRF6aRXl0"
    //     mapContainerStyle={containerStyle} 

const db_connect = require("./db");
import { withSessionRoute } from "lib/config/withSession";
import { profileStage } from './profileStage';

export default withSessionRoute(handler);

function getState(user){
    /*const resState = await fetch('http://localhost:3000/api/profileState', {
        method: 'GET',
        credentials: 'same-origin'
    })
        .then((response) =>response.json())
        .then((json) => {
        console.log('Gotcha', json);
        }).catch((err) => {
        console.log(err);
    });*/

    /*const resState = await fetch('http://127.0.0.1:3000/api/profileState', {
        credentials: "include"
    });
    const data = await resState.json();*/

    axios({
        method: "post",
        data: {
        id: user.id,
        username: user.username
        },
        withCredentials: true,
        url: "http://localhost:3000/api/profileState",
    }).then(function (response) {
        console.log(response.data);
        return response;
    });
}
  

async function handler(req, res) {
    if (req.method === 'POST') {
        /*
        const data = getState(user);
    
        console.log(data);
        if(data.value === -1) {
            console.log("Profile Page - no user connected");
            return {
                notFound: true,
            }
        }
        else if (data.value === 0) {
            console.log("User doesn't have profile");
            return {
                props: { user }
            }
        }
        else if (data.value === 1) {
            console.log("User already has profile");
            return {
                redirect: {
                destination: '/Home',
                permanent: false,
                },
            }
        }
        else {
            return {
                notFound: true,
                //props: { user }
            }
        }
        */
        const user = req.session.user;
        if(!user) {
            console.log("No user connected");
            res.status(400).send("No user connected");
        }
        else if(profileStage(user) === "1") {   //needs to be fixed
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
