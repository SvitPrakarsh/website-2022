import {
	Box,
	Container,
	Flex,
	Heading,
	Text,
	useBoolean,
} from "@chakra-ui/react";
import { motion, useViewportScroll } from "framer-motion";
import { useEffect } from "preact/compat";
import { MonogramLogo } from "./icons";
const MotionBox = motion(Box);

export default function Nav() {
	const [isTransparent, toggleIsTransparent] = useBoolean();
	const { scrollY, scrollYProgress } = useViewportScroll();

	function update() {
		if (scrollY.get && scrollY.getPrevious()) {
			if (scrollY.get() > 100) {
				toggleIsTransparent.off();
			} else {
				toggleIsTransparent.on();
			}
		}
	}

	useEffect(() => {
		scrollY.onChange(() => update());
	}, []);
	const generateColor = (val: any) => {
		if (val < 0.3) {
			return "brand.red";
		} else if (val > 0.3 && val < 0.6) {
			return "brand.red";
		} else {
			return "brand.green";
		}
	};
	return (
		<MotionBox
			as='nav'
			bg='transparent'
			backdropFilter={isTransparent ? undefined : "blur(10px)"}
			px='4'
			transition='0.3s'
			py='3'
			pos='sticky'
			top='0'
		>
			<Container
				as={Flex}
				maxW='container.xl'
				justify='space-between'
				align='center'
			>
				<MonogramLogo
					h='8'
					w='auto'
					// fill='brand.navy'
					fill={generateColor(scrollYProgress.get())}
				/>

				<Heading size='md'>
					6-7 April
					<Text as='span' color='brand.red'>
						&nbsp;&rsquo;22
					</Text>
				</Heading>
			</Container>
		</MotionBox>
	);
}
