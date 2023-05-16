import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  IconButton,
  Box,
  Image,
  Text,
  VStack,
  Stack,
  Link,
  Spacer,
  HStack,
  Flex,
} from "@chakra-ui/react";

import Lang from "../components/lang";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";
import xIcon from "../components/xIcon";
import xlogo from "../public/xlogo.png";

export default function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        zIndex={100}
        mixBlendMode="difference"
        position="fixed"
        display={isOpen ? "none" : "flex"}
        marginTop="1rem"
        marginLeft="2rem"
      >
        <Button
          leftIcon={<RxHamburgerMenu />}
          color="secondary"
          colorScheme=""
          fontSize="2xl"
          onClick={onOpen}
        >
          <Text
            color="secondary"
            paddingTop="0.3rem"
            marginLeft="0.5rem"
            fontFamily="Josefin Sans"
            fontWeight="normal"
            fontSize="xl"
          >
            MENU
          </Text>
        </Button>
        <Lang marginTop="0.1rem" />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        zIndex={100}
        size={{ xs: "full", sm: "xs" }}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="rgba(255,255,255,0.75)"
          color="primary"
          fontFamily="Josefin Sans"
        >
          <Button
            marginTop="1rem"
            marginLeft="2rem"
            colorScheme=""
            fontSize="2xl"
            leftIcon={<RxHamburgerMenu />}
            onClick={onClose}
            justifyContent="left"
          >
            <Text
              paddingTop="0.3rem"
              marginLeft="0.5rem"
              fontFamily="Josefin Sans"
              fontWeight="normal"
              fontSize="xl"
              opacity="1"
            >
              CLOSE
            </Text>
          </Button>
          <DrawerBody height="fit-content" margin="2rem">
            <Stack
              marginTop="4rem"
              fontSize="3xl"
              fontWeight="normal"
              padding="0"
            >
              <Text as="a" href="#">
                TOP
              </Text>
              <Text as="a" href="#">
                EVENTS
              </Text>
              <Text as="a" href="#">
                WORKS
              </Text>
              <Text as="a" href="#">
                NFT
              </Text>
              <Text as="a" href="#">
                VISITOR
              </Text>
              <Text as="a" href="#">
                CONTACT
              </Text>
            </Stack>
            <Stack spacing="1rem" marginTop="3rem">
              <Text
                width="fit-content"
                fontFamily="Josefin Sans"
                as="a"
                href="https://pox.exhibit.website/2022"
                bg="#fef164"
                paddingX="0.5rem"
                paddingTop="0.2rem"
                borderRadius="0.25rem"
                transition="0.2s"
                _hover={{
                  borderRadius: "0.5rem",
                  transition: "0.2s",
                }}
              >
                Proof of X 2022
              </Text>
              <Link href="https://twitter.com/proofofx_" fontSize="xl">
                <FaTwitter />
              </Link>
              <Link>privacy policy</Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
