import {
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Center,
  Tabs,
  TabList,
  Tab,
  useColorModeValue,
  TabPanels,
  TabPanel,
  Stack,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Card from "./Card";
import TEAMS from "../teams.json";

function DepartmentTab({ department }) {
  return (
    <Tab
      color={useColorModeValue("teal.900", "teal.50")}
      _selected={{
        bg: "green.100",
        color: "green.900",
      }}
    >
      {department}
    </Tab>
  );
}

function Member({ name, image, post }) {
  return (
    <Center
      flexDirection="column"
      py={6}
      onClick={() => window.open("google.com", "_blank")}
      background="hsla(200, 61%, 85%, 1)"
      width="220px"
      height="300px"
      borderRadius="5"
    >
      {/* <Image
				borderRadius="5"
				boxSize="180px"
				objectFit="cover"
				src={image}
				alt={name}
			/> */}
      <Image
        borderRadius="5"
        boxSize="180px"
        objectFit="cover"
        src={image}
        alt={name}
      />
      <Text pt="1" fontWeight="bold" fontSize="20" textAlign="center">
        {name}
      </Text>
      <Text pt="0" fontWeight="bold" fontSize="sm" textAlign="center">
        {post}
      </Text>
      <Stack direction="horizontal">
        <IconButton variant="ghost" icon={<BsLinkedin />} />
        <IconButton variant="ghost" icon={<BsGithub />} />
      </Stack>
    </Center>
  );
}

export default function Team() {
  return (
    <Container maxW={"6xl"} py="12">
      <Heading textAlign="center">Team that made it all possible</Heading>
      <Tabs variant="soft-rounded" colorScheme="teal">
        <TabList justifyContent="center" my="4" flexWrap="wrap">
          <DepartmentTab department="Core Team" />
          <DepartmentTab department="Web" />
          <DepartmentTab department="Graphics" />
        </TabList>
        <TabPanels>
          {TEAMS.map((team) => {
            return (
              <TabPanel>
                <HStack gap="12" justifyContent={"center"} flexWrap={"wrap"}>
                  {team.members.map((member) => {
                    return (
                      <Card
                        name={member.name}
                        post={member.Post}
                        image="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                      />
                    );
                  })}
                </HStack>
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Container>
  );
}
