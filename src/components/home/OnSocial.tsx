import onsocialImg from "/public/onsocial-img.png";
import xshape from "/public/x-shape.png";
import oShape from "/public/o-shape.png";

import Image from "next/image";
export default function OnSocial() {
	return (
		<section className="relative mt-8 flex flex-col items-center bg-[url('/onsocial-bg.png')] bg-cover bg-center bg-no-repeat py-[150px] 2xl:h-[1600px]">
			<div className="mx-auto w-2/3">
				<h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-5xl font-bold capitalize leading-[58px] text-transparent">
					WEIEW Trên Mạng Xã Hội
				</h2>
				<div className="mx-auto mb-10 mt-6 h-[8px] w-[100px] bg-[#202330]"></div>
			</div>
			<Image src={onsocialImg} alt="onsocial" className="w-[90%]" />
			<Image
				src={xshape}
				alt="onsocial"
				className="absolute left-10 top-[20%]"
			/>
			<Image
				src={oShape}
				alt="onsocial"
				className="absolute right-10 top-0"
			/>
			<Image
				src={oShape}
				alt="onsocial"
				className="absolute bottom-20 right-[30%]"
			/>
		</section>
	);
}
