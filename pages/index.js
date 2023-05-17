import Head from "next/head";
import Image from "next/image";
import {
  Box,
  Text,
  Heading,
  Link,
  Container,
  HStack,
  Spacer,
  AspectRatio,
  VStack,
  Center,
  Flex,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import style from "../styles/Home.module.css";

import MainVisual from "../components/mainVisual.js";
import SectionTitle from "../components/sectionTitle.js";
import Footer from "../components/footer.js";
import Menu from "../components/menu.js";

import logo from "../public/logo.png";
import map from "../public/map.png";
import pic01 from "../public/pic01.png";
import artsticker from "../public/artsticker.png";
import { useI18n } from "use-mini18n";
import { useEffect } from "react";
import LangButton from "../components/langButton";

export default function Home() {
  const { t } = useI18n();

  return (
    <Box bg="bg" color="primary" fontSize="md" lineHeight={10} width="100%">
      <Head>
        <title>Proof OF X 2023</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
      {/* <Main /> */}
      <MainVisual overflow="hidden" />
      <Container maxW="container.lg" px="3rem" position="relative">
        {/* Top Section */}
        <Box
          width="50%"
          minW="300px"
          position="absolute"
          transform="translateY(-33.3%)"
          marginTop="-10vh"
        >
          <Image src={logo} alt="logo" />
        </Box>
        <Box
          position="static"
          textAlign="right"
          marginTop="10vh"
          paddingTop="2.5vh"
          fontSize={["1.5rem", "1.75rem", "2rem", "2rem"]}
          lineHeight={["2.7rem", "3.15rem", "3.6rem", "3.6rem"]}
          letterSpacing={["0.06rem", "0.07rem", "0.08rem", "0.08rem"]}
          fontFamily="Josefin Sans"
        >
          <Text>- Blockchain As A New Medium For Art -</Text>
          <Text>2023.6.17 sat - 6.25 sun</Text>
          <Text>THE FACE DAIKANYAMA</Text>
        </Box>

        {/* Concept Section */}
        <Box>
          <SectionTitle>CONCEPT</SectionTitle>
          <Box
            fontSize={["1rem", "1rem", "1.25rem", "1.25rem"]}
            lineHeight={["2rem", "2rem", "2.5rem", "2.5rem"]}
            letterSpacing={["0.1rem", "0.1rem", "0.13rem", "0.13rem"]}
            fontFamily="Zen Kaku Gothic New"
          >
            <Text>{t["concept"]}</Text>
          </Box>
        </Box>
        {/* Outline Section */}
        <Box>
          <SectionTitle>OUTLINE</SectionTitle>
          <Heading fontSize="3xl" letterSpacing="0.2rem">
            2023.6.17
            <Box as="span" fontSize="xl">
              {" ("}sat{")"}
            </Box>{" "}
            - 6.25
            <Box as="span" fontSize="xl">
              {" ("}sun{")"}
            </Box>
          </Heading>
          <Box
            fontSize={["1.25rem", "1.25rem", "1.5rem", "1.5rem"]}
            letterSpacing={["0.13rem", "0.13rem", "0.15rem", "0.15rem"]}
            fontFamily="Zen Kaku Gothic New"
          >
            <Text as="p">{t["OutlineDateWeekend"]}</Text>
            <Text as="p">{t["OutlineDateWeekday"]}</Text>
          </Box>
          <Heading
            display="inline-block"
            fontSize="3xl"
            paddingTop="0.5rem"
            marginTop="2.5rem"
            marginBottom="1rem"
            borderBottom="2px"
            letterSpacing="0.1rem"
            transition="0.3s"
            _hover={{
              bg: "primary",
              color: "secondary",
              transition: "0.3s",
              borderColor: "primary",
            }}
          >
            <Text
              as="a"
              href="https://theface.tokyo/"
              textDecoration="none"
              padding="0"
            >
              THE FACE DAIKANYAMA
            </Text>
          </Heading>
          <Flex spacing="0" direction={{ base: "column", sm: "row" }}>
            <Text
              as="p"
              fontSize={["1.2rem", "1.2rem", "1.4rem", "1.4rem"]}
              letterSpacing={["0.12rem", "0.12rem", "0.14rem", "0.14rem"]}
              fontFamily="Zen Kaku Gothic New"
            >
              {t["OutlineLocate"]}
            </Text>
            <Link href="https://goo.gl/maps/NHvVH9Cym72UPQiw9">
              <Text
                w="fit-content"
                color="secondary"
                bg="primary"
                marginLeft={{ base: "0", sm: "1rem" }}
                marginY={{ base: "0.5rem", sm: "0" }}
                fontWeight="bold"
                fontSize="sm"
                px="1rem"
                borderRadius="0.4rem"
                transition="0.2s"
                _hover={{
                  transition: "0.2s",
                  borderRadius: "1rem",
                }}
              >
                Google Map
              </Text>
            </Link>
          </Flex>
          <Text
            as="p"
            fontSize={["1.2rem", "1.2rem", "1.4rem", "1.4rem"]}
            letterSpacing={["0.12rem", "0.13rem", "0.14rem", "0.14rem"]}
            fontFamily="Zen Kaku Gothic New"
          >
            {t["OutlineWay"]}
          </Text>
          <HStack marginTop="2rem">
            <AspectRatio width="50%" aspectRatio={630 / 471}>
              <Image src={pic01} alt="THE FACE DAIKANYAMA"></Image>
            </AspectRatio>
            <Spacer />
            <AspectRatio width="50%">
              <Image src={map} alt="THE FACE DAIKANYAMA"></Image>
            </AspectRatio>
          </HStack>
        </Box>
        {/* Ticket Section */}
        <Box>
          <SectionTitle>TICKET</SectionTitle>
          <Flex
            marginX={{ base: "2.5rem", sm: "5rem" }}
            direction={{ base: "column", sm: "row" }}
            textAlign={{ base: "left", sm: "center" }}
            justifyContent="center"
            fontSize={["1.25rem", "1.25rem", "1.5rem", "1.5rem"]}
            letterSpacing={["0.13rem", "0.13rem", "0.15rem", "0.15rem"]}
            fontFamily="Zen Kaku Gothic New"
          >
            <Text as="p">{t["TicketAdult"]}</Text>
            <Spacer />
            <Text as="p">{t["TicketCollege"]}</Text>
            <Spacer />
            <Text as="p">{t["TicketHighschool"]}</Text>
          </Flex>
          <Box width="fit-content" marginX="auto">
            <Link href="https://artsticker.app/events/6998" textAlign="center">
              <Text
                position="relative"
                marginTop="3rem"
                display="inline-block"
                color="secondary"
                bg="primary"
                fontWeight="bold"
                fontSize="xl"
                paddingX="4rem"
                paddingY="1rem"
                borderRadius="0.4rem"
                transition="0.2s"
                _hover={{
                  transition: "0.2s",
                  borderRadius: "1rem",
                }}
              >
                {t["BuyTicket"]}
              </Text>
            </Link>
            <Box
              width="5.5rem"
              marginTop="0.5rem"
              marginRight="0"
              marginLeft="auto"
            >
              <Image src={artsticker} alt="artsticker" />
            </Box>
          </Box>
        </Box>
        {/* Artist Section */}
        <Box>
          <SectionTitle>ARTISTS</SectionTitle>
          <Heading
            fontSize={["1.25rem", "1.25rem", "1.5rem", "1.5rem"]}
            lineHeight={["2.5rem", "2.5rem", "3rem", "3rem"]}
            letterSpacing={["0.13rem", "0.13rem", "0.15rem", "0.15rem"]}
            fontFamily="Josefin Sans"
          >
            Akihiro Kato / ALTERNATIVE MACHINE / Ara / bouze / Deafbeef /
            EXCALIBUR / exonemo / Figure31 / Jack Butcher / Jan Robert Leegte /
            Kitasenju Design / Masaki Fujihata / NIINOMI / Pindar Van Arman /
            PIV / Rhea Myers / Sarah Friend / Toshi / 0xG / 0xhaiku
          </Heading>
        </Box>
        {/* 1st exhibition Section */}
        <Box>
          <SectionTitle>1st EXHIBITION of Proof Of X</SectionTitle>
          <Text
            as="p"
            fontSize={["1rem", "1rem", "1.25rem", "1.25rem"]}
            lineHeight={["2rem", "2rem", "2.5rem", "2.5rem"]}
            letterSpacing={["0.1rem", "0.1rem", "0.13rem", "0.13rem"]}
            fontFamily="Zen Kaku Gothic New"
          >
            {t["firststExhibit"]}
          </Text>
        </Box>
        {/* Team Section */}
        <Box>
          <SectionTitle>TEAM</SectionTitle>
          <Text
            fontWeight="semibold"
            fontSize={["1rem", "1rem", "1.25rem", "1.25rem"]}
            lineHeight={["2rem", "2rem", "2.5rem", "2.5rem"]}
            letterSpacing={["0.1rem", "0.1rem", "0.13rem", "0.13rem"]}
            fontFamily="Zen Kaku Gothic New"
          >
            {t["Team"]}
          </Text>
          <Text
            as="p"
            fontSize={["1rem", "1rem", "1.25rem", "1.25rem"]}
            lineHeight={["2rem", "2rem", "2.5rem", "2.5rem"]}
            letterSpacing={["0.1rem", "0.1rem", "0.13rem", "0.13rem"]}
            fontFamily="Zen Kaku Gothic New"
          >
            {t["AboutTeam"]}
          </Text>
          <UnorderedList
            listStyleType="none"
            fontWeight="semibold"
            margin="0"
            marginTop="1.25rem"
            fontSize={["1rem", "1rem", "1.25rem", "1.25rem"]}
            lineHeight={["2rem", "2rem", "2.5rem", "2.5rem"]}
            letterSpacing={["0.1rem", "0.1rem", "0.13rem", "0.13rem"]}
            fontFamily="Josefin Sans"
          >
            <ListItem>
              <Link href="https://neort.io/popular" textDecoration="underline">
                NEORT
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://tart.tokyo/" textDecoration="underline">
                TART
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://themassage.jp/" textDecoration="underline">
                MASSAGE MAGAZINE
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.hasaqui.com/" textDecoration="underline">
                hasqui
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://ayumu-nagamatsu.com/"
                textDecoration="underline"
              >
                Ayumu Nagamatsu
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://akihirokato.com/" textDecoration="underline">
                Akihiro Kato
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linktr.ee/takawo" textDecoration="underline">
                Shunsuke Takawo
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://twitter.com/arandoros"
                textDecoration="underline"
              >
                Ara
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
