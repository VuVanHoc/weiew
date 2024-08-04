import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="mt-[100px] grid grid-cols-1 gap-10 bg-gradient-to-r from-primary to-secondary px-10 py-10 text-white md:grid-cols-4 md:gap-4">
			<div className="col-span-1">
				<Image
					src={logo}
					alt="Weiew"
					height={42}
					className="brightness-0 invert"
				/>
				<div className="mt-4 flex w-[200px] justify-between">
					<Link
						href={"https://www.facebook.com/weiew.vn"}
						target="_blank"
					>
						<Image
							src={"/facebook-fill.png"}
							alt={"location"}
							width={24}
							height={24}
						/>
					</Link>
					<Link
						href={"https://www.tiktok.com/@weiew.vn"}
						target="_blank"
					>
						<Image
							className="brightness-0 invert"
							src={"/tik-tok.png"}
							alt={"location"}
							width={24}
							height={24}
						/>
					</Link>
					<Link
						href={"https://www.linkedin.com/company/weiew"}
						target="_blank"
					>
						<Image
							className="brightness-0 invert"
							src={"/linkedin.png"}
							alt={"location"}
							width={24}
							height={24}
						/>
					</Link>
					<Link
						href={"https://www.threads.net/@weiew.vn"}
						target="_blank"
					>
						<Image
							className="brightness-0 invert"
							src={"/threads.png"}
							alt={"location"}
							width={24}
							height={24}
						/>
					</Link>
				</div>
			</div>
			<div className="col-span-1">
				<p className="font-bold">Liên hệ với WEIEW</p>
				<br />
				<div className="flex items-center gap-1">
					<Image
						src={"/icon-location.png"}
						alt={"location"}
						width={24}
						height={24}
					/>
					<span>Cau Giay District, Hanoi, Vietnam</span>
				</div>
				<div className="mt-2 flex items-center gap-1">
					<Image
						src={"/icon-email.png"}
						alt={"location"}
						width={24}
						height={24}
					/>
					<span>infor@weiew.vn</span>
				</div>
				<br />
			</div>
			<div>
				<p className="font-bold">Tin tức Review</p>
				<br />
				<Link href={"#"}>Review Đại học, Ngành học</Link>
				<br />
				<Link href={"#"}>Review Trung tâm Tiếng Anh</Link>
			</div>
			<div>
				<p className="font-bold">Our group</p>
				<br />
				<Link
					href={"https://www.facebook.com/groups/weiew.reviewdaihoc"}
					target="_blank"
				>
					Review Đại học cùng WEIEW
				</Link>
				<br />
				<Link href={"#"}>Review Trung tâm Tiếng Anh</Link>
			</div>
		</footer>
	);
}
