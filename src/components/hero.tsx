import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Countdown from "./countdown";

export default function Hero() {
	return (
		<Box>
			<Container
				as={Flex}
				h='full'
				justify='center'
				align='center'
				flexDir='column'
				minH={["50vh", null, "calc(100vh - 56px)"]}
				maxW='container.xl'
			>
				<Heading
					transition='0.3s'
					fontSize={[42, 64, 72, 128]}
					color='brand.navy'
				>
					Prakarsh
					<Text as='span' color='brand.red'>
						&nbsp;&rsquo;22
					</Text>
				</Heading>
				<Heading
					color='brand.green'
					fontSize='lg'
					// fontWeight='700'
					letterSpacing='4px'
				>
					Engaging minds, empowering success
				</Heading>

				<Countdown />
				<Text color='brand.red' fontSize='lg' fontWeight='700'>
					Coming Soon...
				</Text>
			</Container>
		</Box>
	);
}
