import { Box } from "@chakra-ui/layout";
import React from "react";

const Card = ({ children, ...rest }) => {
  return (
    <Box
      w="full"
      bg="white"
      p="11px"
      overflow="hidden"
      borderRadius="5px"
      border=".2px solid"
      borderColor="gray.100"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Card;
