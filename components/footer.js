import {
  Link,
  HStack,
  Flex,
  Box,
  Container,
  Center,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
      height="7.5rem"
      bg="#a7aaab"
      marginTop="5rem"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxW="container.lg" px={10}>
        <HStack
          width="fit-content"
          marginRight="0"
          marginLeft="auto"
          spacing="2rem"
        >
          <Link>privacy policy</Link>
          <Link href="https://twitter.com/proofofx_" fontSize="xl">
            <FaTwitter />
          </Link>
          <Text
            fontFamily="Josefin Sans"
            as="a"
            href="https://pox.exhibit.website/2022"
            bg="#fef164"
            paddingX="1rem"
            paddingTop="0.2rem"
            borderRadius="0.25rem"
            transition="0.2s"
            _hover={{
              borderRadius: "0.75rem",
              transition: "0.2s",
            }}
          >
            Proof of X 2022
          </Text>
        </HStack>
      </Container>
    </Flex>
  );
}
