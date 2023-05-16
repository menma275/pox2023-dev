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

import useTranslation from "next-translate/useTranslation";

import MainVisual from "../components/mainVisual.js";
import SectionTitle from "../components/sectionTitle.js";
import Footer from "../components/footer.js";
import Menu from "../components/menu.js";

import logo from "../public/logo.png";
import map from "../public/map.png";
import pic01 from "../public/pic01.png";
import artsticker from "../public/artsticker.png";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <Box bg="bg" color="primary" fontSize="md" lineHeight={10} width="100%">
      <Head>
        <title>Proof OF X 2023</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
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
          letterSpacing={["0.1rem", "0.1rem", "0.2rem", "0.2rem"]}
          fontSize={["2xl", "2xl", "3xl", "3xl"]}
          fontFamily="Josefin Sans"
        >
          <Text>- Blockchain As A New Medium For Art -</Text>
          <Text>2023.6.17 sat - 6.25 sun</Text>
          <Text>THE FACE DAIKANYAMA</Text>
        </Box>

        {/* Concept Section */}
        <Box>
          <SectionTitle>CONCEPT</SectionTitle>
          <Text as="p">
            NFTによってデジタルアートが広く流通するようになった今、Generative
            Artが再評価されたり、商業的な成功を収めた作家も数多く生まれました。しかし、いまだにNFTについての批評や評価を行える人材が少なく、その可能性についてまだ理解が進んでいない現状があります。そこで「Proof
            of
            X」の2回目となる本展では、Blockchain及びNFTのメディウムとしての特性に光を当て、NFTの「Core」とも言えるSmart
            Contractレイヤーを取り扱う作品を中心に、その諸相を紹介します。今日のCryptoカルチャーを形成するCoreとなっているSmartContractの可能性はアートの領域のみに留まるものではありません。それを基盤として進化するデジタル文化の諸相を本展で提示するとともに、この展示がより良き議論の機会となることを望みます。
          </Text>
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
          <Text as="p" fontSize="xl">
            土日 : 10:00am - 07:00pm {"("}初日はOpening
            Receptionのため10:00pmまで
            {")"}
          </Text>
          <Text as="p" fontSize="xl">
            平日 : 12:00pm - 09:00pm
          </Text>
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
            <Text as="p" fontSize="xl">
              {/* 東京都渋谷区猿楽町28-13 ROOB-1 B2F */}
              {t("common:OutlineLocate")}
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
          <Text as="p" fontSize="xl">
            東急東横線「代官山」駅徒歩3分
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
          <HStack justifyContent="center" spacing="2.5rem" fontSize="xl">
            <Text as="p">一般 : ¥1,000</Text>
            <Text as="p">大学生 : ¥500</Text>
            <Text as="p">高校生以下 : 無料</Text>
          </HStack>
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
                チケットを購入する
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
          <Heading fontSize="2xl" letterSpacing="0.075rem" lineHeight="2.5rem">
            Akihiro Kato / ALTERNATIVE MACHINE / Ara / bouze / Deafbeef /
            EXCALIBUR / exonemo / Figure31 / Jack Butcher / Jan Robert Leegte /
            Kitasenju Design / Masaki Fujihata / NIINOMI / Pindar Van Arman /
            PIV / Rhea Myers / Sarah Friend / Toshi / 0xG / 0xhaiku
          </Heading>
        </Box>
        {/* 1st exhibition Section */}
        <Box>
          <SectionTitle>1st EXHIBITION of Proof Of X</SectionTitle>
          <Text as="p">
            2022年の4月22日から5月1日かけて、東京の3331 Arts Chiyoda にて「Proof
            of X」の第1回目が行われました。「Proof of X NFT as New Media
            Art」と銘打ち、NFTを（投機目的の）画像データを売る仕組みとし
            て利用するのではなく、NFTを固有の技術・メディウムとして捉え、洞察する中で制作された作品を紹介しました。画一的な目線に終始せず（ときには批判的に捉えながら）、NFTとは何であるのか、その表層の奥にある特性を見つめ、様々なアイディアを織り込んだ作品を提示しました。
          </Text>
        </Box>
        {/* Team Section */}
        <Box>
          <SectionTitle>TEAM</SectionTitle>
          <Text fontSize="xl" fontWeight="semibold">
            Proofs of X実行委員会
          </Text>
          <Text>
            「Proof of X
            Vol.2」はNFTの領域で活動する批評家、メディア、アーティスト、技術者による共同運営により開催されます。現在のチームは以下の通りです。
          </Text>
          <UnorderedList
            listStyleType="none"
            fontWeight="semibold"
            margin="0"
            marginTop="1.25rem"
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
