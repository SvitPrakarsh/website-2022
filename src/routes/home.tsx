import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import Hero from "../components/hero";
import Nav from "../components/nav";

const Home = () => {
	return (
		<>
			<Box
				bgImg='url(/assets/patterns.svg)'
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
					<Text fontSize='md'>
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
			{/* <Container maxW='container.xl'>
				<Flex justify='center'>
					<Box
						bg='red.200'
						p='4'
						rounded='md'
						borderEndColor='red.800'
						borderEndWidth='2px'
						borderEndStyle='dashed'
					>
						<AspectRatio maxW='600px' ratio={3 / 4}>
							<Image
								src='https://picsum.photos/200'
								h='full'
								w='auto'
								objectFit='cover'
							/>
						</AspectRatio>
					</Box>
					<Box bg='red.200' p='4' rounded='md'>
						adfk
					</Box>
				</Flex>
			</Container>
			<SimpleGrid
				columns={[1, 2, 3]}
				spacing={5}
				pr={[10, 1, 0]}
			></SimpleGrid> */}
		</>
	);
};

export default Home;
