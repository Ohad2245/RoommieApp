const db_connect = require("./db");

export async function profileStage(user) { //, status) {
    const user_id = user.id;
    const UserExistsQuery = "SELECT * FROM user_profile WHERE id_user = ?";
    
    //connnect db
    const db = db_connect();
    //var stage = -1;
    //var result;
    //only insert if user dosen't exist
    //const resultJson = 
    db.query(UserExistsQuery, [user_id], (err, result) => {
        console.log("result.length", result.length);
        if (err) {
            db.end();
            throw err;
        }
        else if (result.length > 0) {
            console.log("User already has profile");
            //status = 1;
            //status(1);
            /*throw {
                name: 'ProfileError',
                message: 'Profile exists!'
            };*/
            //throw new Error("ProfileError");
            //console.log("status", status);
            db.end();
            return 1;
        }
        else if (result.length === 0) {
            console.log("User doesn't have profile");
            //status = 0;
            //status(0);
            //console.log("status", status);
            db.end();
            return 0;
        }
        else {
            //status = -1;
            //status(-1);
            //console.log("status", status);
            db.end();
            return -1;
        }
    });
    //console.log("RESULT", result);
    //console.log("resultJson", resultJson);
    /*const numResults = result.length;
    if (numResults > 0) {
        console.log("User already has profile");
        stage = 1;
    }
    else if (numResults === 0) {
        console.log("User doesn't have profile");
        stage = 0;
    }
    else {
        stage = -1;
    }*/
    //close db
    //db.end();
    //return status;
}
