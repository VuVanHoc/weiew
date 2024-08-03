import Image from "next/image";
import gift from "/public/Quatang.png";
import xshape from "/public/x-shape.png";
import oshape from "/public/o-shape.png";
import Link from "next/link";

export default function Gift() {
	return (
		<section
			id="gift"
			className="relative ml-8 mt-8 flex h-[540px] items-center py-[80px]"
		>
			<div className="flex-1">
				<h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl font-bold leading-[58px] text-transparent">
					Quà Tặng
				</h2>
				<div className="mb-10 mt-6 h-[8px] w-[100px] bg-[#202330]"></div>
				<p className="text-[18px] text-[#989B9F]">
					- File tổng hợp 3000+ review, thông tin bóc phốt những phòng
					trọ nên né khi thuê trọ ở Hà Nội
					<br />- Truy cập hoàn toàn miễn phí, giúp các bạn gen Z có
					lựa chọn tốt hơn khi đi thuê phòng trọ
				</p>

				<Link
					href={
						"https://docs.google.com/spreadsheets/d/1AgWQ5kSa9YQhd_50FR7g4LCAKvsFghQyDZzFofh8B0k/edit?gid=1332686522#gid=1332686522"
					}
					target="_blank"
				>
					<button className="mt-10 rounded-lg bg-gradient-to-r from-primary to-secondary px-4 py-2 text-[18px] text-white hover:opacity-80">
						Truy Cập Ngay
					</button>
				</Link>
			</div>
			<Image src={gift} alt="gift" className="w-[60%]" />
			<Image src={xshape} alt="gift" className="absolute left-10 top-0" />
			<Image
				src={oshape}
				alt="gift"
				className="absolute bottom-[50%] right-10"
			/>
		</section>
	);
}
