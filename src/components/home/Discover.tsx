"use client";

import Image from "next/image";
import dotFrame from "/public/dot-frame.png";
import rocket from "/public/rocket.png";
import listConnect from "/public/list-connect.png";
import discover1 from "/public/service1.png";
import discover2 from "/public/service2.png";
import review1step1 from "/public/review1-step1.png";
import review1step2 from "/public/review1-step2.png";
import review1step3 from "/public/review1-step3.png";
import review1step4 from "/public/review1-step4.png";
import review2step1 from "/public/review2-step1.png";
import review2step2 from "/public/review2-step2.png";
import review2step3 from "/public/review2-step3.png";
import review2step4 from "/public/review2-step4.png";
import { useState } from "react";
import cx from "clsx";

const REVIEWS = [
	{
		id: 1,
		name: "Review Trung Tâm Tiếng Anh",
		image: discover1,
		description:
			"Tổng hợp đánh giá trên hơn 100+ trung tâm ! Review và feedback chi tiết của các bạn học viên Tặng kèm file khoá học, lộ trình tự học 6.5 Ielts",
		steps: [
			{
				name: "Xác định nhu cầu",
				image: review1step1,
				description:
					"Chọn 3/10 tiêu chí ưu tiên để tìm trung tâm phù hợp với bản thân",
			},
			{
				name: "Review Trung tâm",
				image: review1step2,
				description:
					"Review thông tin trung tâm và gợi ý các trung tâm chất lượng và phù hợp với học viên",
			},
			{
				name: "Kết nốt tìm hiểu",
				image: review1step3,
				description:
					"Kết nối với các trung tâm Cùng học viên giám sát thông tin để đảm bảo quyền lợi cho học viên",
			},
			{
				name: "Hỗ trợ và Feedback",
				image: review1step4,
				description:
					"Hỗ trợ trong suốt quá trình đăng ký, sau khi đăng ký nếu có bất kì vấn đề gì phát sinh trong quá trình học!",
			},
		],
	},
	{
		id: 2,
		name: "Review Đại Học",
		image: discover2,
		description:
			"300+ trường ĐH và 100+ các ngành học khác nhau  Tư vấn trực tiếp 1:1 bởi các anh chị sinh viên  Hỗ trợ tư vấn và giải đáp thắc mắc 24/7",
		steps: [
			{
				name: "Đặt vấn đề, giải pháp",
				image: review2step1,
				description:
					"Dựa vào các tiêu chí, và nhu cầu chọn ngành chọn trường để làm rõ vấn đề cùng weiew",
			},
			{
				name: "Khám phá bản thân",
				image: review2step2,
				description:
					"Thực hiện các bài trắc nghiệm tính cách và năng lực để hiểu rõ hơn về bản thân.",
			},
			{
				name: "Tư vấn, định hướng 1:1",
				image: review2step3,
				description:
					"Buổi gặp gỡ online với các anh chị, giúp em thu hẹp các lựa chọn và đề xuất các ngành học, nghề nghiệp phù hợp.",
			},
			{
				name: "Đồng hành và hỗ trợ",
				image: review2step4,
				description:
					"WeieW sẽ đồng hành cùng em trong suốt quá trình chọn ngành, chọn trường. Hãy cùng weiew đỗ NV1!",
			},
		],
	},
];
export default function Discover() {
	const [currentReviewSelected, setCurrentReviewSelected] = useState(
		REVIEWS[0],
	);
	return (
		<section className="relative mx-8 mt-8 lg:py-[80px]" id="services">
			<div className="mx-auto w-full lg:w-4/5">
				<h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-3xl font-bold text-transparent lg:text-5xl lg:leading-[58px]">
					WEIEW Có Gì?
				</h2>
				<div className="mx-auto mb-10 mt-6 h-[4px] w-[100px] bg-[#202330] lg:h-[8px]"></div>
				<p className="text-center text-[18px] text-[#989B9F]">
					Nhằm cung cấp thông tin review xác thực cũng như giúp các
					bạn gen Z có lựa chọn đúng đắn hơn đặc biệt trong việc chọn
					trường Đại học và chọn một trung tâm tiếng anh tốt để học,
					WeieW xin được hỗ trợ với 2 dịch vụ:
				</p>
			</div>
			<div className="relative mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
				{REVIEWS.map((review) => (
					<div
						onClick={() => setCurrentReviewSelected(review)}
						key={review.id}
						className={cx(
							"group cursor-pointer rounded-3xl border border-gray-50 bg-white from-primary to-secondary px-2 py-2 shadow-xl transition-all hover:bg-gradient-to-r lg:px-8 lg:py-8",
							currentReviewSelected.id === review.id
								? "bg-gradient-to-r"
								: "",
						)}
					>
						<Image
							src={review.image}
							alt={review.name}
							className="w-full"
						/>
						<p
							className={cx(
								"bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-2xl font-bold text-transparent group-hover:text-white",
								currentReviewSelected.id === review.id
									? "text-white"
									: "",
							)}
						>
							{review.name}
						</p>
						<p
							className={cx(
								"mt-4 text-center text-[#989B9F] group-hover:text-white",
								currentReviewSelected.id === review.id
									? "text-white"
									: "",
							)}
						>
							{review.description}
						</p>
					</div>
				))}
			</div>
			<h2 className="mt-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-3xl font-bold text-transparent lg:text-5xl lg:leading-[58px]">
				{`Quy Trình ${currentReviewSelected.name}`}
			</h2>
			<div className="mx-auto mb-10 mt-6 h-[4px] w-[100px] bg-[#202330] lg:h-[8px]"></div>
			<div className="relative mx-auto grid w-full grid-cols-4 gap-4 lg:w-[90%]">
				<Image
					src={rocket}
					alt="dot frame"
					className="absolute -left-[100px] top-[40%] hidden -translate-y-[40%] lg:-left-[80px] lg:top-[45%] lg:block lg:-translate-y-[45%]"
				/>
				<Image
					className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-[40%] md:top-[50%] lg:top-[45%] lg:-translate-y-[45%]"
					src={listConnect}
					alt=""
				/>
				{currentReviewSelected.steps.map((step, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-start gap-5 bg-white py-4 lg:py-10"
					>
						<Image
							src={step.image}
							alt={step.name}
							className="aspect-square md:h-[100px] lg:h-[100px]"
						/>
						<div className="mt-4 text-center lg:mt-10">
							<p className="text-xs font-bold text-black lg:text-xl">
								Bước {index + 1}
								<br />
								{step.name}
							</p>
							<p className="mt-1 text-center text-[10px] text-[#989B9F] lg:mt-4 lg:text-base">
								{step.description}
							</p>
						</div>
					</div>
				))}
			</div>

			<Image
				src={dotFrame}
				alt="dot frame"
				className="absolute -top-10 left-[15%] hidden lg:block"
			/>
		</section>
	);
}
