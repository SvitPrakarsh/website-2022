import {
	Box,
	Container,
	Flex,
	HStack,
	Icon,
	IconButton,
	Link,
	Text,
} from "@chakra-ui/react";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Footer() {
	return (
		<Box bg='red.100' py='2'>
			<Container
				maxW='container.xl'
				py='2'
				as={Flex}
				gap='2'
				flexDir={["column-reverse", null, "row"]}
				justify={["center", null, "space-between"]}
				align={["center", null, "space-between"]}
			>
				<HStack spacing='3'>
					<Icon as={HiOutlineLocationMarker} />
					<Text fontSize='sm'>
						Sardar Vallabhbhai Patel Institute of Technology, Vasad
					</Text>
				</HStack>
			</Container>
			<Container
				maxW='container.xl'
				as={Flex}
				gap='2'
				flexDir={["column-reverse", null, "row"]}
				justify={["center", null, "space-between"]}
				align={["center", null, "space-between"]}
			>
				<Text fontSize='sm'>
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
						aria-label='Instagram'
						onClick={() =>
							window.open(
								"https://www.instagram.com/svitprakarsh/",
								"_blank"
							)
						}
					/>
					<IconButton
						variant='ghost'
						icon={<FiFacebook />}
						rounded='full'
						aria-label='Facebook'
						onClick={() =>
							window.open(
								"https://facebook.com/svitprakarshxvii",
								"_blank"
							)
						}
					/>

					<IconButton
						variant='ghost'
						icon={<FiYoutube />}
						rounded='full'
						aria-label='Youtube'
						onClick={() =>
							window.open(
								"https://www.youtube.com/channel/UCKMMGkIUwMUokSbjgzb9OUw",
								"_blank"
							)
						}
					/>
				</HStack>
			</Container>
		</Box>
	);
}
