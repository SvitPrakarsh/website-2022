import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	Text,
	useBoolean,
} from "@chakra-ui/react";
import { motion, useViewportScroll } from "framer-motion";
import { Link } from "preact-router";
import { useEffect } from "preact/compat";
const MotionBox = motion(Box);

export default function Navbar() {
	const [isTransparent, toggleIsTransparent] = useBoolean();
	const { scrollY } = useViewportScroll();

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
		return () => {
			scrollY.clearListeners();
		};
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
			transition='0.3s ease-in-out'
			py='3'
			pos='fixed'
			w='full'
			zIndex='10'
			top='0'
			borderBottom={isTransparent ? undefined : "1px solid #999"}
		>
			<Container
				as={Flex}
				maxW='container.xl'
				justify='space-between'
				align='center'
			>
				<Link href='/'>
					<Image
						src='/logo.png'
						h='8'
						w='auto'
						// fill='brand.navy'
						// fill={generateColor(scrollYProgress.get())}
					/>
				</Link>
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
