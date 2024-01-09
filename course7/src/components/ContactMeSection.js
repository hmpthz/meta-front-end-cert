import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  chakra,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: ""
    },
    
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().required("Required").email("Invalid email address"),
      comment: Yup.string().required("Required").min(25, "Must be at least 25 characters")
    }),

    onSubmit: (values) => submit("", values),
  });

  // listen to changes in response
  useEffect(() => {
    if (response) {
      if (response.type == "success")
        formik.resetForm();
      onOpen(response.type, response.message);
    }
  }, [response]);

  return (
    <FullScreenSection
      id="contactme-section"
      isDarkBackground
      backgroundColor="#512DA8"
      py={32} px={4}
      spacing={8}
      maxWidth="960px"
      alignItems="stretch"
    >
      <Heading as="h1" alignSelf="flex-start">
        Contact me
      </Heading>
      <chakra.form onSubmit={formik.handleSubmit} mx={6} my={2}>
        <VStack spacing={4}>
          <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
            <FormLabel htmlFor="firstName">Name</FormLabel>
            <Input
              id="firstName" name="firstName"
              {...formik.getFieldProps("firstName")}
            />
            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.email && formik.touched.email}>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              id="email" name="email" type="email"
              {...formik.getFieldProps("email")}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="type">Type of enquiry</FormLabel>
            <Select
              id="type" name="type"
              placeholder="Select an option"
              {...formik.getFieldProps("type")}
            >
              <option value="hireMe">Freelance project proposal</option>
              <option value="openSource">Open source consultancy session</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>
          <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
            <FormLabel htmlFor="comment">Your message</FormLabel>
            <Textarea
              id="comment" name="comment"
              height={250}
              {...formik.getFieldProps("comment")}
            />
            <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
            Submit
          </Button>
        </VStack>
      </chakra.form>
    </FullScreenSection>
  );
};

export default LandingSection;
