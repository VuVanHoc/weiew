import Image from "next/image";
import xshape from "/public/x-shape.png";
import oshape from "/public/o-shape.png";
import polygon from "/public/polygon-shape.png";

export default function AboutUs() {
	return (
		<section className="relative mx-8 mt-8 flex h-[540px] items-center py-[80px]">
			<div className="flex-1">
				<h2 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-5xl font-bold leading-[58px] text-transparent">
					Về chúng tôi
				</h2>
				<div className="mb-10 mt-6 h-[8px] w-[100px] bg-[#202330]"></div>
				<p className="text-[18px] text-[#989B9F]">
					Weiew là trang tin tức dành cho giới trẻ, chuyên cung cấp
					những đánh giá chân thực và chi tiết về các trung tâm tiếng
					Anh, phòng trọ và tư vấn chọn trường đại học.
				</p>
			</div>
			<div className="h-[382px] flex-1 bg-gray-500"></div>
			<Image
				src={xshape}
				alt="group shape"
				className="absolute -right-5 bottom-0"
			/>
			<Image
				src={oshape}
				alt="group shape"
				className="absolute -right-10 bottom-1/2"
			/>
			<Image
				src={polygon}
				alt="group shape"
				className="absolute right-[20%] top-0"
			/>
		</section>
	);
}
