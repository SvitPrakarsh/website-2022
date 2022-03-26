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
// import { BsGithub, BsLinkedin } from "react-icons/bs";
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
                        image={member.img}
                        github={member.github}
                        linkedin={member.linkedin}
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
