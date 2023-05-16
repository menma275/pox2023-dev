import { ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider
      theme={extendTheme({
        colors: {
          bg: "#d7dcdc",
          primary: "#000000",
          secondary: "#ffffff",
        },
        fonts: {
          heading: "Josefin Sans",
          body: "Zen Kaku Gothic New",
        },
      })}
    >
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
