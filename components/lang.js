import { Button, HStack, Text } from "@chakra-ui/react";

function Lang(props) {
  return (
    <HStack spacing="0" fontFamily="Josefin Sans" {...props}>
      <Button colorScheme="" color="secondary" fontWeight="normal">
        JP
      </Button>
      <Text color="secondary"> / </Text>
      <Button colorScheme="" color="secondary" ontWeight="normal">
        EN
      </Button>
    </HStack>
  );
}

export default Lang;
