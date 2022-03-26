import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import EventCard from "../components/event";
import EVENTS from "../events.json";
import { dashify } from "../utils";

export default function CategoryPage({ category }: { category: string }) {
	const currentEvent = EVENTS?.find(
		c => dashify(c.category_name) === category
	);

	return (
		<>
			<Container maxW='container.xl' pt='72px' pb='12'>
				<Heading textAlign='center' mb='6'>
					{currentEvent?.category_name}
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
						currentEvent?.events.map(ele => {
							return (
								<EventCard
									title={ele.title}
									// @ts-ignore
									description={ele?.tag}
									// @ts-ignore
									icon={ele?.icon}
								/>
							);
						})}
				</SimpleGrid>
			</Container>
		</>
	);
}
