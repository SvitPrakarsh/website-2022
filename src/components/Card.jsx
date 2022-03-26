import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Card({ name, post, image, github, linkedin }) {
  return (
    <Center py="6">
      <Box
        role={"group"}
        p={6}
        minW={"260px"}
        w={"full"}
        background="hsla(200, 61%, 85%, 1)"
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box rounded={"lg"} mt={-12} pos={"relative"} height={"200px"}>
          <Image
            rounded={"lg"}
            height={200}
            width={220}
            objectFit={"cover"}
            src={image}
          />
        </Box>
        <Stack pt={5} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {post}
          </Text>
          <Heading fontSize={"lg"} fontFamily={"body"} fontWeight={500}>
            {name}
          </Heading>
          <HStack>
            {github && (
              <Link href={github} target="_blank">
                <IconButton
                  variant="ghost"
                  icon={<BsGithub fontSize="18px" />}
                />
              </Link>
            )}
            {linkedin && (
              <Link href={linkedin} target="_blank">
                <IconButton
                  variant="ghost"
                  icon={<BsLinkedin fontSize="18px" />}
                />
              </Link>
            )}
          </HStack>
        </Stack>
      </Box>
    </Center>
  );
}
