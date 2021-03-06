import {
	Box,
	Container,
	Heading,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import EventCategoryCard from "../components/event-category";
import Hero from "../components/hero";
import Team from "../components/Team";
import Sponsors from "../components/Sponsors";

const Home = () => {
	return (
		<>
			<Box bgImg={"url(/patterns.svg)"} bgPos='center' bgSize='contain'>
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
					Come join the thrill, bring your friends too.
				</Text>
				<SimpleGrid columns={[2, null, 2, 3]} spacing={[4, null, 12]}>
					<EventCategoryCard
						name='Cyber Intrusion'
						icon='cyber-intrusion.png'
						bg='hsla(90, 61%, 85%, 1)'
					/>
					<EventCategoryCard
						name='Circuitricks'
						icon='circuitricks.png'
						bg='hsla(220, 61%, 85%, 1)'
					/>
					<EventCategoryCard
						name='Structonics'
						icon='structonics.png'
						bg='hsla(60, 61%, 85%, 1)'
					/>
					<EventCategoryCard
						name='Wheels & Wings'
						icon='wheels-n-wings.png'
						bg='hsla(40, 61%, 85%, 1)'
					/>
					<EventCategoryCard
						name="Dexter's Lab"
						icon='dexters-lab.png'
						bg='hsla(170, 61%, 85%, 1)'
					/>
					<EventCategoryCard
						name='Workshops'
						icon='workshops.png'
						bg='hsla(200, 61%, 85%, 1)'
					/>
					<EventCategoryCard
						name='Ancillary'
						icon='ancillary.png'
						bg='hsla(130, 61%, 85%, 1)'
					/>
					<EventCategoryCard
						name='S.H.A.R.K.S.'
						icon='sharks.png'
						bg='hsla(180, 61%, 85%, 1)'
					/>
					<EventCategoryCard
						name='Funtastic'
						icon='funtastic.png'
						bg='hsla(160, 61%, 85%, 1)'
					/>
				</SimpleGrid>
			</Container>

			<Sponsors />
			<Team />
			{/* <Cyberintrusion/> */}
		</>
	);
};

export default Home;
