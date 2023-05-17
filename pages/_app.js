import { ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react";
import { TransProvider } from "use-mini18n";
import i18n from "../i18n";

function App({ Component, pageProps }) {
  return (
    <TransProvider i18n={i18n}>
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
    </TransProvider>
  );
}

export default App;
