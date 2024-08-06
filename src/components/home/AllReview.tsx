"use client";
import Image from "next/image";
import dotShape from "/public/dot-frame.png";

export default function AllReview() {
	return (
		<section
			id="bai-review"
			className="relative mt-8 flex flex-col items-center py-[100px]"
		>
			<div className="mx-auto w-full lg:w-2/3">
				<h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-5xl font-bold capitalize leading-[58px] text-transparent">
					Bài Review
				</h2>
				<div className="mx-auto mb-10 mt-6 h-[8px] w-[100px] bg-[#202330]"></div>
			</div>
			<div className="lgg:w-full relative mt-8 grid w-[90%] grid-cols-1 gap-32 md:grid-cols-2 md:gap-10 md:gap-y-32 lg:grid-cols-3 lg:gap-8">
				{Array.from({ length: 3 }).map((_, index) => (
					<div
						key={index}
						className="h-[300px] rounded-3xl border border-gray-50 bg-white bg-[url('/neu-bg.png')] bg-cover bg-no-repeat px-8 py-8 shadow-xl transition-all"
					>
						<div className="flex aspect-square h-16 w-16 flex-col items-center justify-center rounded-full bg-white p-2 text-center font-bold">
							<p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
								25
								<br />
								Nov
							</p>
						</div>
						<div className="mt-[80px] rounded-3xl border border-gray-50 bg-white p-4 shadow-xl">
							<div className="flex justify-between">
								<p className="bg-gradient-to-r from-primary to-secondary px-2 text-white">
									WeieW
								</p>
								<div className="flex items-center gap-1">
									<Image
										src={"/heart.png"}
										alt=""
										width={24}
										height={24}
									/>
									<span>80</span>
								</div>
							</div>
							<p className="mt-4 text-xl font-bold uppercase">
								REVIEW Đại học Kinh tế quốc dân
							</p>
							<p className="text-sm text-gray-600">
								Trường Đại học Kinh tế quốc dân là một trường
								đại học định hướng...
							</p>
							<br />
							<div className="flex cursor-pointer items-center gap-1 bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-transparent">
								Xem thêm{" "}
								<Image
									src={"/icon-arrow.png"}
									alt=""
									width={16}
									height={16}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
			<Image
				src={dotShape}
				alt=""
				className="absolute right-0 top-0 opacity-50"
			/>
		</section>
	);
}
