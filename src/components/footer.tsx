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
			{/* <Container
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
			</Container> */}
			<Container
				maxW='container.xl'
				as={Flex}
				gap='2'
				flexDir={["column-reverse", null, "row"]}
				justify={["center", null, "space-between"]}
				align={["center", null, "space-between"]}
			>
				<HStack spacing='3'>
					<Icon as={HiOutlineLocationMarker} />
					<Link href="https://www.google.com/maps/place/Sardar+Vallabhbhai+Patel+Institute+of+Technology/@22.4690063,73.0741597,17z/data=!3m1!4b1!4m5!3m4!1s0x395fb55277d1e457:0xaf7e43a3d29561b!8m2!3d22.4690063!4d73.0763484" target="_blank">
						<Text fontSize='sm'>
							Sardar Vallabhbhai Patel Institute of Technology, Vasad
						</Text>
					</Link>
				</HStack>
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
