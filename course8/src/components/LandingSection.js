import React, { useState, useEffect } from "react";
import { Image, Heading, Text, HStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatarImg from "../images/avatar.jpg"

const greeting = "Hello, I am Harold!";
const bio1 = "A Passionate Front-End Developer";
const bio2 = "Tech stack: ReactJS, Typescript, Tailwind CSS";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    id="landing-section"
    isDarkBackground
    backgroundColor="#2A4365"
    justify="center"
    padding="0 10px"
  >
    <HStack
      spacing={12}
      wrap="wrap"
      justify="center"
    >
      <Image
        alt="Harold" src={avatarImg}
        rounded="full"
        boxSize="200px"
      />
      <Box minWidth="300px" textAlign="center">
        <Heading size={{ base:"xl", md:"2xl" }} marginBottom={8}>{greeting}</Heading>
        <Text fontSize="2xl" marginBottom={2} textShadow="#222222 4px 4px 2px">{bio1}</Text>
        <Text fontSize="xl">{bio2}</Text>
      </Box>
    </HStack>
  </FullScreenSection>
);

export default LandingSection;
