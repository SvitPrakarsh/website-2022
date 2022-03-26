import {
  Box,
  Container,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
// import React from "react";
import eventdata from "../event.json";
export const dashify = (str: string) => {
  return str.toLowerCase().split(" ").join("-");
};
function CatagoryPage({ match }: any) {
  //   const {
  //     params: { catagory },
  //   } = match;
  //   console.log(match);
  const catagory = "cyber-intrusion";
  //   const {catagory} =useParams()
  const event = eventdata?.find((c) => dashify(c.category_name) === catagory);
  return (
    <>
      <Container maxW={"container.xl"} pt={"72px"}>
        <Heading textAlign={"center"} mb={6}>
          {event?.category_name}
        </Heading>
        <SimpleGrid
          //   flexWrap={"wrap"}
          //   gap={[4, null, 6]}
          //   justifyContent={"space-around"}
          //   mt={[20, 20, 5, 5]}
          minChildWidth={[260, null, 420]}
          spacing={9}
        >
          {eventdata &&
            event?.events.map((ele) => {
              console.log(ele);
              return (
                <Flex w={"full"} bg={"#F7F1EC"} maxWidth={"700px"}>
                  <Flex
                    minH={[42]}
                    minW={[42]}
                    bgColor={"#eebbb9"}
                    borderRadius={12}
                    p={[6]}
                    borderRight={"dashed"}
                    borderColor={"#a8908f"}
                    justify="center"
                    alignItems="center"
                  >
                    <Img width={[24]} src={ele?.icon} maxWidth={[24]} />
                  </Flex>
                  <Box flex={1} p={10} bgColor={"#eebbb9"} borderRadius={12}>
                    <Heading fontSize={[18, 20, 25]}>{ele.title}</Heading>
                    <Text fontSize={[10, 20, 25]}>{ele?.tag}</Text>
                  </Box>
                </Flex>
              );
            })}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default CatagoryPage;
