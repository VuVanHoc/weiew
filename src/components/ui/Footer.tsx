import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="mt-[100px] grid grid-cols-6 rounded-t-[50px] bg-gradient-to-r from-primary to-secondary px-10 py-10 text-white">
			<div className="col-span-2">
				<Image
					src={logo}
					alt="Weiew"
					height={42}
					className="brightness-0 invert"
				/>
				<div className="mt-4 flex w-[200px] justify-between">
					<Image
						src={"/facebook-fill.png"}
						alt={"location"}
						width={24}
						height={24}
					/>
					<Image
						src={"/instagram-fill.png"}
						alt={"location"}
						width={24}
						height={24}
					/>
					<Image
						src={"/twitter-fill.png"}
						alt={"location"}
						width={24}
						height={24}
					/>
					<Image
						src={"/youtube-fill.png"}
						alt={"location"}
						width={24}
						height={24}
					/>
				</div>
			</div>

			<div>
				<p className="font-bold">Company News</p>
				<br />
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
				<p>Lorem ipsum</p>
			</div>
			<div>
				<p className="font-bold">Usefull links</p>
				<br />
				<p>Đại Học</p>
				<p>Trung Tâm</p>
				<p>Phòng trọ</p>
				<p>Bài Review</p>
			</div>
			<div className="col-span-2">
				<p className="font-bold">Contact us</p>
				<br />
				<div className="flex items-center gap-1">
					<Image
						src={"/icon-location.png"}
						alt={"location"}
						width={24}
						height={24}
					/>
					<span>
						380 St Kilda Road, Melbourne VIC 3004, Australia
					</span>
				</div>
				<br />
				<div className="flex items-center gap-1">
					<Image
						src={"/icon-email.png"}
						alt={"location"}
						width={24}
						height={24}
					/>
					<span>info@gmail.com</span>
				</div>
				<br />
				<div className="flex items-center gap-1">
					<Image
						src={"/icon-phone.png"}
						alt={"location"}
						width={24}
						height={24}
					/>
					<span>
						1800-121-3637
						<br />
						+91 555 234-8765
					</span>
				</div>
			</div>
		</footer>
	);
}
