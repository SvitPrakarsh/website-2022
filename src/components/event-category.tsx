import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export default function EventCategoryCard({
	name,
	icon,
	bg,
}: {
	name: string;
	icon: string;
	bg: string;
}) {
	return (
		<Flex
			bg={bg}
			p='4'
			h='300'
			w='300'
			maxW='300'
			maxH='300'
			minH='300'
			minW='300'
			rounded='2xl'
			gap='4'
			flexDir='column'
			justify='center'
			mx='auto'
			transition='0.3s ease-in-out'
			shadow='inner'
			_hover={{ transform: [undefined, null, "scale(1.05)"] }}
			_active={{ transform: "scale(0.9)" }}
			userSelect='none'
		>
			<Image
				src={"/event-categories/" + icon}
				alt=''
				h='40'
				w='auto'
				mx='auto'
			/>
			<Heading size='lg' textAlign='center' color='#000'>
				{name}
			</Heading>
		</Flex>
	);
}
