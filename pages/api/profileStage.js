const db_connect = require("./db");

export function profileStage(user) {
    const user_id = user.id;
    const UserExistsQuery = "SELECT * FROM user_profile WHERE id_user = ?";
    
    //connnect db
    const db = db_connect();
    //only insert if user dosen't exist
    db.query(UserExistsQuery, [user_id], (err, result) => {
        if (err) {
            throw err;
        }

        if (result.length > 0) {
            console.log("User already has profile");
            return 1;
        }
        if (result.length === 0) {
            console.log("User doesn't have profile");
            return 0;
        }
        return -1;
    });
    //close db
    db.end();
}
