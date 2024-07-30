"use client";

import { animated, useSpring } from "@react-spring/web";
import { FC } from "react";

interface IProps {
	numberPoint: number;
	className?: string;
	toFixed?: number;
	endContent?: JSX.Element;
}

const TextAnimated: FC<IProps> = ({ numberPoint, className, endContent }) => {
	const { number } = useSpring({
		from: { number: 0 },
		number: numberPoint,
		delay: 200,
		config: { mass: 1, tension: 20, friction: 10 },
	});

	return (
		<div className="flex justify-center">
			<animated.p className={className}>
				{number.to((n) => n.toFixed(0))}
			</animated.p>
			{endContent}
		</div>
	);
};

export default TextAnimated;
