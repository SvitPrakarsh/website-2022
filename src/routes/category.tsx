import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import EventCard from "../components/event";
import EVENTS from "../events.json";
import { dashify } from "../utils";

export default function CategoryPage({
	categoryName,
}: {
	categoryName: string;
}) {
	const category = EVENTS?.find(
		c => dashify(c.category_name) === categoryName
	);

	return (
		<Box>
			<Container
				minH='calc(100vh - 114px)'
				maxW='container.xl'
				pt='72px'
				pb='12'
			>
				<Heading textAlign='center' mb='6'>
					{category?.category_name}
				</Heading>
				<SimpleGrid
					//   flexWrap={"wrap"}
					//   gap={[4, null, 6]}
					//   justifyContent={"space-around"}
					//   mt={[20, 20, 5, 5]}
					// 	minChildWidth={[260, null, 420]}
					columns={[1, null, 2]}
					spacingX='4'
					spacingY='6'
				>
					{EVENTS &&
						category?.events.map(event => {
							return (
								<EventCard
									eventId={event.id}
									categoryId={category.id}
								/>
							);
						})}
				</SimpleGrid>
			</Container>
		</Box>
	);
}
