import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';
import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import '../components/navbar/navbar.css'; 
import '../components/footer/footer.css'; 
import './register/register.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../UserContext';
import {useContext,useState} from 'react';
import '../pages/Profile/profile.css';

export default function App({ Component, pageProps }) {


  NProgress.configure({showSpinner:false})

  Router.events.on('routeChangeStart',() =>{
    NProgress.start();
  });

  Router.events.on('routeChangeComplete',() =>{
    NProgress.done();
  });

  const [loginUserName,setloginUserName] = useState(null);

  return (
    <div className="bg-gray-100">
    <Head>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
    </Head>
    <ChakraProvider>
    <UserContext.Provider value={{loginUserName,setloginUserName}}>
      <Layout>
        <Component {...pageProps}/>
        <ToastContainer/>
      </Layout>
      </UserContext.Provider>
    </ChakraProvider>
    </div>
  ) 
}