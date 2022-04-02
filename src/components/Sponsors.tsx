import { Container, Flex, Heading, Img } from "@chakra-ui/react";
import SPONSORS from "../sponsors.json";

export default function Sponsors() {
  return (
    <Container maxW={"6xl"} py="12">
      <Heading textAlign="center">Meet our Sponsors</Heading>
      <Flex gap='8' flexWrap="wrap" justifyContent="center" mt="12">
        {SPONSORS.map((spons) => {
          return (
            <Img src={`/sponsor/${spons.img}`} w='150px' h='auto'/>
          )
        })}
      </Flex>
    </Container>
  );
}