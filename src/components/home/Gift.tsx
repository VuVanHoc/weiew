import Image from "next/image";
import gift from "/public/gift.png";
import xshape from "/public/x-shape.png";
import oshape from "/public/o-shape.png";

export default function Gift() {
	return (
		<section className="relative ml-8 mt-8 flex h-[540px] items-center bg-[url('/cloud.png')] bg-contain bg-right bg-no-repeat py-[80px]">
			<div className="flex-1">
				<h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl font-bold leading-[58px] text-transparent">
					Quà Tặng
				</h2>
				<div className="mb-10 mt-6 h-[8px] w-[100px] bg-[#202330]"></div>
				<p className="text-[18px] text-[#989B9F]">
					{`Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s`}
				</p>
			</div>
			<Image src={gift} alt="gift" className="w-[150px] flex-1" />
			<Image
				src={xshape}
				alt="gift"
				className="absolute -left-10 top-[20%]"
			/>
			<Image
				src={oshape}
				alt="gift"
				className="absolute bottom-[50%] right-10"
			/>
		</section>
	);
}
