import Image from "next/image";
import dotFrame from "/public/dot-frame.png";
import discover1 from "/public/discover-1.png";
import discover2 from "/public/discover-2.png";
import review1step1 from "/public/review1-step1.png";
import review1step2 from "/public/review1-step2.png";
import review1step3 from "/public/review1-step3.png";
import review1step4 from "/public/review1-step4.png";
import review2step1 from "/public/review2-step1.png";
import review2step2 from "/public/review2-step2.png";
import review2step3 from "/public/review2-step3.png";
import review2step4 from "/public/review2-step4.png";

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
				image: review2step1,
				description:
					"Thực hiện các bài trắc nghiệm tính cách và năng lực để hiểu rõ hơn về bản thân.",
			},
			{
				name: "Tư vấn, định hướng 1:1",
				image: review2step1,
				description:
					"Buổi gặp gỡ online với các anh chị, giúp em thu hẹp các lựa chọn và đề xuất các ngành học, nghề nghiệp phù hợp.",
			},
			{
				name: "Đồng hành và hỗ trợ",
				image: review2step1,
				description:
					"WeieW sẽ đồng hành cùng em trong suốt quá trình chọn ngành, chọn trường. Hãy cùng weiew đỗ NV1!",
			},
		],
	},
];
export default function Discover() {
	return (
		<section className="relative mx-8 mt-8 py-[80px]">
			<div className="mx-auto w-2/3">
				<h2 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-center text-5xl font-bold leading-[58px] text-transparent">
					WEIEW Có gì?
				</h2>
				<div className="mx-auto mb-10 mt-6 h-[8px] w-[100px] bg-[#202330]"></div>
				<p className="text-center text-[18px] text-[#989B9F]">
					{`Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s`}
				</p>
			</div>
			<div className="mt-8 grid grid-cols-2 gap-8">
				{REVIEWS.map((review) => (
					<div
						key={review.id}
						className="from-primary to-secondary group cursor-pointer rounded-3xl border border-gray-50 bg-white px-10 py-10 shadow-xl transition-all hover:bg-gradient-to-r"
					>
						<Image
							src={review.image}
							alt={review.name}
							className="w-full"
						/>
						<p className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-center text-2xl font-bold text-transparent group-hover:text-white">
							{review.name}
						</p>
						<p className="mt-4 text-center text-[#989B9F] group-hover:text-white">
							{review.description}
						</p>
					</div>
				))}
			</div>
			<Image
				src={dotFrame}
				alt="dot frame"
				className="absolute -top-10 left-[15%]"
			/>
		</section>
	);
}
