import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Router from "next/router";
import NProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../UserContext";
import { useState } from "react";
import '../styles/profile.css';
import '../styles/register.css';
import '../styles/navbar.css';
import '../styles/footer.css';
import '../styles/chooseOffer.css';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  const [loginUserName, setloginUserName] = useState(null);

  return (
    <div className="bg-gray-100">
      <CacheProvider value={emotionCache}>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
            integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <ChakraProvider>
            <CssBaseline />
            <UserContext.Provider value={{ loginUserName, setloginUserName }}>
              <Layout>
                <Component {...pageProps} />
                <ToastContainer />
              </Layout>
            </UserContext.Provider>
          </ChakraProvider>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
