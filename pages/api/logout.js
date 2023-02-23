import { withSessionRoute } from "lib/config/withSession";

export default withSessionRoute(logout);

async function logout(req, res, session) {
    console.log(req.session);
    req.session.destroy();
    console.log("logged out");
    res.send({ok: true})
}