"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";

const reviews = [
	{
		id: 1,
		name: "An Hạ",
		des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply ",
	},
	{
		id: 2,
		name: "An Hạ",
		des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply ",
	},
	{
		id: 3,
		name: "An Hạ",
		des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply ",
	},
	{
		id: 4,
		name: "An Hạ",
		des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply ",
	},
	{
		id: 5,
		name: "An Hạ",
		des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply ",
	},
	{
		id: 6,
		name: "An Hạ",
		des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply ",
	},
];

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
export default function CustomerReviews() {
	return (
		<section className="relative items-center bg-[url('/wave-1.png')] bg-contain bg-center bg-no-repeat py-[40px]">
			<div className="mx-auto w-2/3">
				<h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-5xl font-bold capitalize leading-[58px] text-transparent">
					Trải nghiệm sau khi dùng dịch vụ
				</h2>
				<div className="mx-auto mb-10 mt-6 h-[8px] w-[100px] bg-[#202330]"></div>
				<p className="text-center text-[18px] text-[#989B9F]">
					{`Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s`}
				</p>
			</div>
			<div className="mt-8 w-full justify-center">
				<Carousel
					infinite={true}
					autoPlay={true}
					ssr={true}
					itemClass="mx-4"
					responsive={responsive}
					className="mx-auto pb-[100px] pt-8"
				>
					{reviews.map((review) => (
						<div
							key={review.id}
							className="relative rounded-lg border border-gray-100 bg-white p-8 shadow-lg"
						>
							<Image
								className="absolute -top-3 right-4"
								src="/double-comma.png"
								alt="star"
								width={50}
								height={50}
							/>
							<div className="flex gap-2">
								<div className="aspect-square h-[50px] w-[50px] rounded-full bg-slate-500"></div>
								<div>
									<p className="flex items-center gap-2">
										<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-bold text-transparent">
											{review.name}
										</span>
										<Image
											src="/Vector.png"
											alt="star"
											width={20}
											height={20}
										></Image>
										<span>recommends</span>
									</p>
									<p className="font-semibold text-[#989B9F]">
										WEIEW - Gen Z Review Trải Nghiệm
									</p>
								</div>
							</div>
							<p className="mt-4">{review.des}</p>
						</div>
					))}
				</Carousel>
			</div>
		</section>
	);
}
