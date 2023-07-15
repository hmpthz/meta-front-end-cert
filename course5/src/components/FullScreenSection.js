import * as React from "react";
import { Box, VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, id, isDarkBackground, ...boxProps }) => {
  return (
    <Box
      as="section"
      id={id}
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack
        maxWidth="1280px" minHeight="100vh"
        margin="0 auto"
        {...boxProps}
      >
        {children}
      </VStack>
    </Box>
  );
};

export default FullScreenSection;
