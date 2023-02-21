import Head from 'next/head';
import { Box} from '@chakra-ui/react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { useRouter } from 'next/router'
import {UserContext} from '../UserContext';


function Layout ({children}){
    const router = useRouter();
    return(
    <>
    
        <Head>
            <title>Real Estate</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box maxWidth="1280px" m="auto">
        {router.pathname === "/Login" || router.pathname === '/Register' || router.pathname === '/' || router.pathname === '/Profile'? (
           ''
        ) : 
        <header>
            <Navbar/>
        </header>}
        
        <main>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
        </Box>
    </>
    )
} 
export default Layout;

