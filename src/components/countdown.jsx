import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Countdown() {
	const calculateTimeLeft = () => {
		const difference = +new Date("2022-04-06") - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: addPrecedingZero(
					Math.floor((difference / 1000 / 60) % 60)
				),
				seconds: addPrecedingZero(
					Math.floor((difference % (1000 * 60)) / 1000)
				),
			};
		}

		return timeLeft;
	};

	function addPrecedingZero(time) {
		// console.log(time);

		let timeS = String(time);

		if (timeS.length <= 1) {
			timeS = "0" + timeS;
		}

		// console.log(timeS);

		return timeS;
	}

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	const timerComponents = [];
	Object.keys(timeLeft).forEach((interval, index) => {
		if (!timeLeft[interval]) {
			return;
		}

		// console.log(index);
		if (index === 3) {
			timerComponents.push(<span>{timeLeft[interval]}</span>);
			return;
		}
		if (index === 1 && timeLeft[interval] < 10) {
			timerComponents.push(
				<span>
					0{timeLeft[interval]}&nbsp;{": "}
				</span>
			);
		} else {
			timerComponents.push(
				<span>
					{timeLeft[interval]}&nbsp;{": "}
				</span>
			);
		}
	});

	return (
		<>
			<Box py='6' textAlign='center'>
				{timerComponents.length ? (
					<Box>
						<Heading fontSize='sm' color='red.400'>
							HOLD TIGHT
						</Heading>
						<Heading size='lg'>{timerComponents}</Heading>
						<Heading
							fontSize={10}
							letterSpacing='2px'
							color='brand.green'
							mb={5}
						>
							DAYS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HRS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MINS
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SECS
						</Heading>
					</Box>
				) : (
					<Heading size='md'>Thank you for coming!</Heading>
				)}
			</Box>
		</>
	);
}
