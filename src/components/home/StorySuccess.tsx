"use client";

import Carousel from "react-multi-carousel";
import Image from "next/image";
import xshape from "/public/x-shape.png";
import oshape from "/public/o-shape.png";
import polygon from "/public/polygon-shape.png";

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

export default function StorySuccess() {
	return (
		<section className="relative items-center pt-[40px]">
			<div className="mx-auto w-2/3">
				<h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-5xl font-bold capitalize leading-[58px] text-transparent">
					Câu Chuyện Thành Công
				</h2>
				<div className="mx-auto mb-10 mt-6 h-[8px] w-[100px] bg-[#202330]"></div>
				<p className="text-center text-[18px] text-[#989B9F]">
					{`Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s`}
				</p>
			</div>

			<Carousel
				infinite={true}
				// autoPlay={true}
				ssr={true}
				responsive={responsive}
				itemClass="flex justify-center"
				className="mx-auto pb-[100px] pt-8"
			>
				<div className="flex w-4/5 gap-4 rounded-[32px] bg-gradient-to-r from-primary to-secondary p-8 text-white shadow-lg">
					<Image
						src="/story1.png"
						alt="story-success"
						width={324}
						height={554}
						className="rounded-[32px]"
					/>
					<div>
						<h4 className="text-2xl font-bold">
							Vấn đề: Chưa tìm được trung tâm phù hợp do có quá
							nhiều thông tin, khó để xác định chất lượng trung
							tâm!
						</h4>
						<br />
						<p className="text-[18px] font-bold">
							Phân tích nhu cầu:
						</p>
						<ul className="list-inside list-disc">
							<li>
								Học từ nền tảng đến 7.0, mong học phí dưới 40tr
							</li>
							<li>
								Trung tâm uy tín, có cơ sở thuận lợi di chuyển
							</li>
						</ul>
						<br />
						<div className="border-b-[1px] border-white"></div>
						<br />
						<p className="text-[18px] font-bold">Đánh giá:</p>
						<blockquote>
							{`"Nhờ được bạn giới thiệu nên em biết tới được weiew
							và được weiew support trong quá trình tìm hiểu trung
							tâm! Về Feedback điểm em ưng thì anh chị tư vấn cực
							kì tận tâm vs thông tin bên weiew chất lượng lắmmm
							mn ơi! Mình không chỉ đc hỗ trợ tìm trung tâm mà còn
							được định hướng cách học và lựa chọn lộ trình học
							hợp lý nhất ... Còn được tặng file tài liệu tự học
							tiếng anh siêu đỉnh nữa, nói chung là 100000 điểm
							cho weiew nhé!`}{" "}
							<br />
							<br />
							Về việc feedback trung tâm đang học thì oke la lắm
							có điều lúc đầu bên này tư vấn nhầm học phí cho mình
							may đc weiew hỗ trợ nên cũng oke à!{`"`}
						</blockquote>
						<br />
						<div className="border-b-[1px] border-white"></div>
					</div>
				</div>
			</Carousel>
			<Image
				src={xshape}
				alt="group shape"
				className="absolute -left-5 bottom-1/2"
			/>
			<Image
				src={oshape}
				alt="group shape"
				className="absolute -right-8 bottom-1/2"
			/>
			<Image
				src={polygon}
				alt="group shape"
				className="absolute right-[20%] top-0"
			/>
		</section>
	);
}
