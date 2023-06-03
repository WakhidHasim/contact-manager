/*eslint-disable*/
// chakra imports
import {
  Box,
  Button, Flex,
  Link,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
// import IconBox from "components/Icons/IconBox";
// import { CreativeTimLogo } from "components/Icons/Icons";
// import { Separator } from "components/Separator/Separator";
// import { SidebarHelp } from "components/Sidebar/SidebarHelp";
import React from "react";
import { Link as NavLink } from "react-router-dom";

import { FaHome } from 'react-icons/fa';
// import { FaPlusSquare } from 'react-icons/fa';
// import { FaPhoneSquare } from 'react-icons/fa';

type Routes = {
  path: string
  name: string
  icon: React.ReactElement
}

const activeRoute = (pathName: string, routeName: string) => {
  return pathName === routeName ? "active" : "";
};

const createLinks = (routes: Routes[]) => {
  // Chakra Color Mode
  const activeBg = useColorModeValue("white", "gray.700");
  const inactiveBg = useColorModeValue("white", "gray.700");
  const activeColor = useColorModeValue("gray.700", "white");
  const inactiveColor = useColorModeValue("gray.400", "gray.400");

  return routes.map((prop, key) => {
    // if (prop.redirect) {
    //   return null;
    // }
    // if (prop.category) {
    //   var st = {};
    //   st[prop["state"]] = !state[prop.state];
    //   return (
    //     <div key={prop.name}>
    //       <Text
    //         color={activeColor}
    //         fontWeight="bold"
    //         mb={{
    //           xl: "12px",
    //         }}
    //         mx="auto"
    //         ps={{
    //           sm: "10px",
    //           xl: "16px",
    //         }}
    //         py="12px"
    //       >
    //         {document.documentElement.dir === "rtl"
    //           ? prop.rtlName
    //           : prop.name}
    //       </Text>
    //       {createLinks(prop.views)}
    //     </div>
    //   );
    // }

    return (
      // <NavLink to="#" key={prop.name}>

      <Button
        key={key}
        boxSize="initial"
        justifyContent="flex-start"
        alignItems="center"
        bg="transparent"
        mb={{
          xl: "12px",
        }}
        mx={{
          xl: "auto",
        }}
        py="12px"
        ps={{
          sm: "10px",
          xl: "16px",
        }}
        borderRadius="15px"
        // _hover="none"
        w="100%"
        _active={{
          bg: "inherit",
          transform: "none",
          borderColor: "transparent",
        }}
        _focus={{
          boxShadow: "none",
        }}
      >
        <Flex>
          <span>Hello</span>
          {/* <IconBox
              bg={inactiveBg}
              color="teal.300"
              h="30px"
              w="30px"
              me="12px"
            >
              {prop.icon}
            </IconBox> */}

          <Text color={inactiveColor} my="auto" fontSize="sm">
            {prop.name}
          </Text>
        </Flex>
      </Button>
      // </NavLink>
    );
  });
};

type SidebarProps = {
  logoText: string
}

const routes: Routes[] = [
  {
    path: "/home",
    name: "Home",
    icon: <FaHome />
  }
]


const SidebarContent = ({ logoText }: SidebarProps) => {
  // to check for active links and opened collapses
  // let location = useLocation();
  // this is for the rest of the collapses
  // const [state, setState] = React.useState({});

  // verifies if routeName is the one active (in browser input)

  const links = <>{createLinks(routes)}</>;

  return (
    <>
      <Box pt={"25px"} mb="12px">
        <Link
          href="#"
          target="_blank"
          display="flex"
          lineHeight="100%"
          mb="30px"
          fontWeight="bold"
          justifyContent="center"
          alignItems="center"
          fontSize="11px"
        >
          <span>Todo: tim logo</span>
          {/* <CreativeTimLogo w="32px" h="32px" me="10px" /> */}
          <Text fontSize="sm" mt="3px">
            {logoText}
          </Text>
        </Link>
        <span>Todo: separator</span>
        {/* <Separator></Separator> */}
      </Box>
      <Stack direction="column" mb="40px">
        <Box>{links}</Box>
      </Stack>
      <span>todo: sidebar help</span>
      {/* <SidebarHelp /> */}
    </>
  )
}

export default SidebarContent