import { Heading, Box } from "@chakra-ui/react";
import { execOnce } from "next/dist/shared/lib/utils";

const SectionTitle = (props) => {
  return (
    <Box textAlign="center" marginTop="7.5rem" marginBottom="3rem">
      <Heading
        display="inline-block"
        fontSize="1.75rem"
        letterSpacing="0.07rem"
        paddingBottom={2}
        borderBottom="4px"
        {...props}
      />
    </Box>
  );
};

export default SectionTitle;
