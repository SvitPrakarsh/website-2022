import {
	Button,
	Flex,
	Heading,
	Img,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	Tag,
	Text,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import EVENTS from "../events.json";

export default function EventCard({
	categoryId,
	eventId,
}: {
	categoryId: number;
	eventId: number;
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { category_name: category } = EVENTS[categoryId];
	const { title, icon, rounds, desc, contact_number } =
		EVENTS[categoryId].events[eventId];

	return (
		<>
			<Flex w='full' onClick={onOpen}>
				{icon && (
					<Flex
						flexBasis='30%'
						bgColor='red.100'
						rounded='2xl'
						p={[3, null, 6]}
						borderRight='dashed'
						borderColor='#a8908f'
						justify='center'
						alignItems='center'
					>
						<Img
							src={icon}
							w={[20, null, 36]}
							h='auto'
							// maxWidth={[24]}
						/>
					</Flex>
				)}
				<VStack
					align='start'
					justify='center'
					flex={1}
					px={[3, null, 6]}
					py={[2, null, 4]}
					bgColor='red.100'
					rounded='2xl'
				>
					<Heading size='md'>
						{title}
						{}
					</Heading>
					<Text fontSize='lg'>{desc}</Text>
				</VStack>
			</Flex>
			<Modal scrollBehavior='inside' isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader fontSize='2xl' cursor='pointer'>
						{title}
					</ModalHeader>
					<ModalCloseButton />

					<ModalBody>
						<Text fontSize='xl' fontWeight='600'>
							Rounds
						</Text>
						{rounds?.map(round => (
							<Stack key={round.id} my='4'>
								<Flex justify='space-between' align='center'>
									<Heading size='sm' color='teal.400'>
										{category != "workshop" &&
											`#${round.id}`}{" "}
										{round.title}
									</Heading>
									{/* {!!round.duration && (
										<Tag size='sm'>{round.duration}</Tag>
									)} */}
								</Flex>

								{category == "workshop" ? (
									round?.description.split("•").map(
										(line, key) =>
											key !== 0 && (
												<Text key={key}>
													•&nbsp;{line}
													<br />
												</Text>
											)
									)
								) : (
									<Text>{round.description}</Text>
								)}
							</Stack>
						))}
					</ModalBody>
					<ModalFooter>
						<Button
							ml={3}
							leftIcon={<AiOutlineWhatsApp />}
							colorScheme='teal'
							variant='solid'
							onClick={() =>
								window.open(
									`https://api.whatsapp.com/send?phone=+91${contact_number}`,
									"_blank"
								)
							}
						>
							Participate
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
