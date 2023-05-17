import { Button, HStack, Text } from "@chakra-ui/react";
import { useI18n } from "use-mini18n";

const LangButton = (props) => {
  const { t, lang, langs, changeLang, getText } = useI18n();
  return (
    <HStack spacing="0" fontFamily="Josefin Sans" {...props}>
      <Button
        colorScheme=""
        color="secondary"
        fontWeight="normal"
        onClick={() => changeLang("ja")}
        opacity={lang === "ja" ? 1 : 0.25}
      >
        JP
      </Button>
      <Text color="secondary"> / </Text>
      <Button
        colorScheme=""
        color="secondary"
        ontWeight="normal"
        onClick={() => changeLang("en")}
        opacity={lang === "en" ? 1 : 0.25}
      >
        EN
      </Button>
    </HStack>
  );
};

export default LangButton;
