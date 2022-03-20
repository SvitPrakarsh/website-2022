import {
	AspectRatio,
	Box,
	Container,
	Flex,
	Heading,
	Image,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import Hero from "../components/hero";
import Nav from "../components/nav";

const Home = () => {
	return (
		<>
			<Box
				bgImg='url(/src/assets/patterns.svg)'
				bgPos='center'
				bgSize='contain'
			>
				<Nav />
				<Hero />
			</Box>
			<Box bg='red.100'>
				<Container
					as={VStack}
					py='12'
					maxW='container.xl'
					align={["center", null, "start"]}
					textAlign={["center", null, "left"]}
				>
					<Heading>
						About {/* <Text as='span' color='blue.600'> */}
						Prakarsh
						{/* </Text> */}
					</Heading>
					<Text>
						PRAKARSH, a National Level Technical Symposium to bring
						together the best brains in the country and give them a
						chance to showcase their skills and talents. This will
						give a platform for the students to interact and compete
						with each other. There are non-technical events too to
						incorporate fun activities alongside the technical
						fervour.
					</Text>
				</Container>
			</Box>
			<Container maxW='container.xl' py='16'>
				<Heading textAlign='center'>The Events</Heading>
				<Text textAlign='center' mb='12'>
					Come join the thrill, bring your friend too.
				</Text>
			</Container>
			<SimpleGrid
				columns={[1, 2, 3]}
				spacing={5}
				pr={[10, 1, 0]}
			></SimpleGrid>
		</>
	);
};

export default Home;
