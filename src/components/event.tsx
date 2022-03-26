import { Flex, Heading, Img, Text, VStack } from "@chakra-ui/react";

export default function EventCard({
	title,
	description,
	icon,
}: {
	title: string;
	description: string;
	icon: string;
}) {
	return (
		<Flex w='full'>
			{icon && (
				<Flex
					flexBasis='30%'
					bgColor='red.100'
					rounded='2xl'
					p={[6]}
					borderRight='dashed'
					borderColor='#a8908f'
					justify='center'
					alignItems='center'
				>
					<Img src={icon} w='36' h='auto' maxWidth={[24]} />
				</Flex>
			)}
			<VStack
				align='start'
				justify='center'
				flex={1}
				px='6'
				py='4'
				bgColor='red.100'
				rounded='2xl'
			>
				<Heading size='md'>{title}</Heading>
				<Text fontSize='lg'>{description}</Text>
			</VStack>
		</Flex>
	);
}
