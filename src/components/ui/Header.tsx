import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";

const NAVS = [
	{
		href: "#dai-hoc",
		label: "Đại học",
	},
	{
		href: "#trung-tam",
		label: "Trung tâm",
	},
	{
		href: "#phong-tro",
		label: "Phòng trọ",
	},
	{
		href: "#bai-review",
		label: "Bài review",
	},
];
export default function Header() {
	return (
		<header className="sticky top-0 z-50 flex items-center justify-between p-4 px-8 backdrop-blur-lg">
			<Image src={logo} alt="Weiew" height={42} />
			<nav>
				<ul className="flex items-center justify-center gap-8 text-2xl capitalize text-[#989B9F]">
					{NAVS.map((nav) => (
						<li
							key={nav.href}
							className="hover:text-secondary font-bold"
						>
							<Link href={nav.href}>{nav.label}</Link>
						</li>
					))}
				</ul>
			</nav>
			<button className="from-primary to-secondary rounded-lg bg-gradient-to-r px-4 py-2 text-[18px] text-white hover:opacity-80">
				Liên hệ
			</button>
		</header>
	);
}
