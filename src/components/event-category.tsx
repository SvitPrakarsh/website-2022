import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Link } from "preact-router";
import { dashify } from "../routes/CatagoryPage";
export default function EventCategoryCard({
  name,
  icon,
  bg,
}: {
  name: string;
  icon: string;
  bg: string;
}) 

{
	console.log(dashify(nam));
	
  return (
    <Link href={`/events/${dashify(name)}`}>
      <Flex
        bg={bg}
        p="4"
        h={[125, 150, 300]}
        w={[125, 150, 300]}
        maxW={[125, 150, 300]}
        maxH={[125, 150, 300]}
        minH={[125, 150, 300]}
        minW={[125, 150, 300]}
        rounded="2xl"
        gap="4"
        flexDir="column"
        justify="center"
        mx="auto"
        transition="0.3s ease-in-out"
        shadow="inner"
        _hover={{ transform: [undefined, null, "scale(1.05)"] }}
        _active={{ transform: "scale(0.9)" }}
        userSelect="none"
        cursor={"pointer"}
      >
        <Image
          src={"/category-icons/" + icon}
          alt=""
          h={[14, null, 40]}
          w="auto"
          mx="auto"
        />
        <Heading fontSize={[12, 16, 20]} textAlign="center" color="#000">
          {name}
        </Heading>
      </Flex>
    </Link>
  );
}
