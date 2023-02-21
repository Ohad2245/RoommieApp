/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Login from "./Login";
import { withSessionSsr } from "lib/config/withSession";

function index() {
  return (
    <div>
      <Login />
    </div>
  );
}

export const getServerSideProps = withSessionSsr(async ({ req, res }) => {
  const user = req.session.user;
  console.log("Index, User: ", user);

  if (!user) {
    console.log("Index Page - no user connected");
    return {
      redirect: {
        permanent: false,
        destination: "/Login",
      },
      props: {},
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: "/Home",
    },
    props: { user },
  };
});

export default index;
