import Link from "next/link";
import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Flex,
  Box,
  Spacer,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import React,{useContext} from "react";
import axios from "axios";
import { UserContext } from "../../UserContext";
import {ChakraProvider} from '@chakra-ui/react';

const Navbar = () => {
  const {loginUserName} = useContext(UserContext);

  console.log(loginUserName);
  
  const logout = () => {
    console.log("Logging out...");
    axios({
      method: "post",
      withCredentials: true,
      url: "api/logout",
    })
    .then(() => window.location.href = '/')
    .catch((err) => console.log(err));
  };

  return (
    <ChakraProvider>
    <div>
      <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box>
          <Link href="/Home">
            <div className="roommie">
              <p>R</p>
              <p>O</p>
              <p>O</p>
              <p>M</p>
              <p>M</p>
              <p>I</p>

              <div className="title">
                <div className="e"></div>
                <div className="e"></div>
                <div className="e"></div>
              </div>
            </div>
            {loginUserName}
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FcMenu />}
              variant="outlined"
              color="red.400"
            />
            <MenuList>
              <Link href="/" passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
              </Link>
              <Link href="/search" passHref>
                <MenuItem icon={<BsSearch />}>Search</MenuItem>
              </Link>
              <Link href="/search?purpose=for-sale" passHref>
                <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
              </Link>
              <Link href="/search?purpose=for-rent" passHref>
                <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
              </Link>
              <Button className="btn" onClick={logout}>
                Logout
              </Button>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </div>
    </ChakraProvider>
  );
};

export default Navbar;