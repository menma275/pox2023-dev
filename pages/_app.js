import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider
      theme={extendTheme({
        colors: {
          bg: "#d8dcdd",
          primary: "#000000",
          secondary: "#ffffff",
        },
        fonts: {
          heading: "Josefin Sans",
          body: "Zen Kaku Gothic New",
        },
      })}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
