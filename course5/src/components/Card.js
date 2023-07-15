import { VStack, Heading, Image, Text, Link, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      spacing={0}
      backgroundColor="white"
      rounded="lg"
      color="black"
      justify="stretch"
    >
      <Image src={imageSrc} alt={title} w="100%" rounded="lg" />
      <VStack flexGrow="1" alignItems="flex-start" mx={4} my={4}>
        <Heading size="md">{title}</Heading>
        <Text color="#777777">{description}</Text>
        <Link title="see more" href="#" marginTop="auto">See more <FontAwesomeIcon icon={faArrowRight} /></Link>
      </VStack>
    </VStack>
  );
};

export default Card;
