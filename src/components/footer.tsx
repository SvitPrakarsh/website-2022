import {
	Box,
	Container,
	Flex,
	HStack,
	IconButton,
	Link,
	Text,
} from "@chakra-ui/react";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
	return (
		<Box bg='red.100'>
			<Container
				maxW='container.xl'
				py='2'
				as={Flex}
				gap='2'
				flexDir={["column-reverse", null, "row"]}
				justify={["center", null, "space-between"]}
				align={["center", null, "space-between"]}
			>
				<Text fontSize='lg'>
					Made with{" "}
					<Link
						color='brand.green'
						textDecorationLine='underline'
						textDecorationStyle='wavy'
						textDecorationColor='red.300'
						transition='0.3s ease-in-out'
						textDecoration='underline wavy rgba(255, 255, 255, 0)'
						_hover={{ textDecorationColor: "red.400" }}
						href='https://preactjs.com/'
						target='_blank'
					>
						Preact
					</Link>
					&nbsp;&&nbsp;
					<Link
						color='brand.green'
						textDecorationLine='underline'
						textDecorationStyle='wavy'
						textDecorationColor='red.300'
						transition='0.3s ease-in-out'
						textDecoration='underline wavy rgba(255, 255, 255, 0)'
						_hover={{ textDecorationColor: "red.400" }}
						href='https://vitejs.dev/'
						target='_blank'
					>
						Vite
					</Link>
					.
				</Text>
				<HStack>
					<IconButton
						variant='ghost'
						icon={<FiInstagram />}
						rounded='full'
						aria-label='Instagrm'
						onClick={() =>
							window.open(
								"https://www.instagram.com/svitprakarsh/",
								"_blank"
							)
						}
					/>
				</HStack>
			</Container>
		</Box>
	);
}
