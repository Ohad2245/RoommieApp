import React from 'react';
import { withSessionSsr } from 'lib/config/withSession';

const PrivatePage = ({ user }) => (
    <div>
        <h1>Hello {user.username}</h1>
        <p>Secret Content</p>
    </div>
);

export const getServerSideProps = withSessionSsr(
    async ({req, res}) => {
        const user = req.session.user;
        console.log("Home Page, User: ", user);

        if(!user) {
          console.log("Home Page - no user connected");
          return {
              notFound: true,
          }
        }

        return {
            props: { user }
        }
    }
);

export default PrivatePage;

//eslint-disable jsx-a11y/alt-text 
// import { Flex, Box, Text, Button } from "@chakra-ui/react";
// import { useEffect,useState } from "react";
// import Property from "../components/Property";
// import { baseUrl, fetchApi } from "../utils/fetchApi";

// export default function Home({ propertiesForSale, propertiesForRent }) {
//   console.log(propertiesForSale, propertiesForRent);
  
//   return (
//     <Box>
//       <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
//         <Box p="5">
//           <Text color="gray.500" fontSize="sm" fontWeight="medium">Hello </Text>
//           <Text fontSize="3xl" fontWeight="bold">Test</Text>
//           <Text
//             fontSize="lg"
//             paddingTop="3"
//             paddingBottom="3"
//             color="gray.700"
//           > Test 2</Text>
//           <Button fontSize="xl" bg="blue.300" color="white">Test 3</Button>
//         </Box>
//       </Flex>

//       { <Flex flexWrap="wrap">
//         {propertiesForRent.map((property) => (
//           <Property property={property} key={property.id} />
//         ))}
//       </Flex> }
//       <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
//         <Box p="5">
//           <Text color="gray.500" fontSize="sm" fontWeight="medium">Hello </Text>
//           <Text fontSize="3xl" fontWeight="bold">Test</Text>
//           <Text
//             fontSize="lg"
//             paddingTop="3"
//             paddingBottom="3"
//             color="gray.700"
//           > Test 2</Text>
//           <Button fontSize="xl" bg="blue.300" color="white">Test 3</Button>
//         </Box>
//       </Flex>
//       { <Flex flexWrap="wrap">
//         {propertiesForSale.map((property) => (
//           <Property property={property} key={property.id} />
//         ))}
//       </Flex> }
//     </Box>
//   );
// }
// export const getStaticProps = async () =>{
//   const propertyForSale = await fetchApi(
//     `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
//   );
//   const propertyForRent = await fetchApi(
//     `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
//   );

//   return {
//     props: {
//       propertiesForSale: propertyForSale?.hits,
//       propertiesForRent: propertyForRent?.hits,
//     },
//   };
// }