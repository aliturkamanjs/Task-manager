import React from "react";
import Header from "./components/Header/Header";
import LeftSidBar from "./components/leftSidebar/LeftSidbare";
import Main from "./components/main/Main";
import { Container, Flex, Box } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

const App = () => {
  const { toggleColorMode } = useColorMode();
  const headerSidBarBg = useColorModeValue("white", "#21212B");
  const headerIconColor = useColorModeValue("#2D3748", "#BCBCBF");
  const BorderColorHeader = useColorModeValue("gray.100", "gray.900");
  const MainBg = useColorModeValue("#f8fafd", "#181820");
  const color = useColorModeValue("gray.700", "gray.300");

  return (
    <>
      <Container
        p="0"
        display="flex"
        maxW="container.1xl"
        height="full"
        flexDirection="column"
        bg={MainBg}
      >
        <Header
          toggleColorMode={toggleColorMode}
          headerIconColor={headerIconColor}
          headerSidBarBg={headerSidBarBg}
          BorderColorHeader={BorderColorHeader}
        />
        <Flex h="full">
          <Box
            flex={1}
            mr={{base: '0px', sm: '0px',md: '80px', lg: '18px', xl:'0px'}}
          >
            <LeftSidBar
              headerSidBarBg={headerSidBarBg}
              MainBg={MainBg}
              headerIconColor={headerIconColor}
            />
          </Box>

          <Box flex={6}>
          <Main
            MainBg={MainBg}
            headerSidBarBg={headerSidBarBg}
            color={color}
            BorderColorHeader={BorderColorHeader}
            headerIconColor={headerIconColor}
          />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default App;
