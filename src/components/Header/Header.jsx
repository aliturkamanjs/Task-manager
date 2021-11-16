import React from "react";
import profileImage from "../images/profile.jpeg";

import { Flex } from "@chakra-ui/react";
import { Link, Text } from "@chakra-ui/layout";
import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { MdSpaceDashboard } from "react-icons/md";
import { IoFolderOpen } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import { CgSun } from "react-icons/cg";
import { CgMenu } from "react-icons/cg";

const Header = ({
  toggleColorMode,
  headerSidBarBg,
  headerIconColor,
  BorderColorHeader,
}) => {
  return (
    <Flex
      w="full"
      bg={headerSidBarBg}
      height="52px"
      alignItems="center"
      justifyContent="space-between"
      pr="27px"
      pl="27px"
      borderBottom=".5px solid"
      borderColor={BorderColorHeader}
      position="fixed"
      zIndex="10"
    >
      <Flex alignItems="center">
        <Button
          cursor="pointer"
          pr="0"
          pl="0"
          bg="none"
          height="35px"
          as="a"
          iconSpacing
          leftIcon={<CgMenu fontSize="23px" cursor={headerIconColor} />}
        ></Button>
        <Button
          cursor="pointer"
          bg="none"
          as="a"
          ml="2"
          height="35px"
          pr="5px"
          pl="5px"
          leftIcon={
            <MdSpaceDashboard fontSize="22px" color={headerIconColor} />
          }
        >
          <Text
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
          >
            Dashboard
          </Text>
        </Button>
        <Button
          cursor="pointer"
          bg="none"
          as="a"
          ml="3"
          height="35px"
          pr="5px"
          pl="5px"
          leftIcon={<IoFolderOpen fontSize="22px" color={headerIconColor} />}
        >
          <Text
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
          >
            Collections
          </Text>
        </Button>
      </Flex>

      <Flex alignItems="center">
        <Button
          cursor="pointer"
          bg="none"
          as="a"
          p="5px"
          height="35px"
          onClick={toggleColorMode}
        >
          <CgSun fontSize="23px" />
        </Button>
        <Button cursor="pointer" bg="none" as="a" mr="3" p="5px" height="35px">
          <RiSearch2Line fontSize="23px" />
        </Button>
        <Link href="https://github.com/aliturkamanjs" _focus={{}} isExternal>
          <Avatar src={profileImage} name="Ali Turkaman" w="34px" h="34px">
            <AvatarBadge boxSize="1rem" bg="green.500" />
          </Avatar>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
