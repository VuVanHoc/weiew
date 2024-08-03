import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";

const NAVS = [
	{
		href: "#services",
		label: "Dịch Vụ",
	},
	{
		href: "#gift",
		label: "Quà tặng",
	},
	{
		href: "#feedback",
		label: "Feedback",
	},
	{
		href: "#bai-review",
		label: "Bài review",
	},
];
export default function Header() {
	return (
		<header className="fixed top-0 z-50 flex w-full max-w-7xl items-center justify-between bg-white p-4 px-8">
			<Link href={"/"}>
				<Image src={logo} alt="Weiew" height={42} />
			</Link>
			<nav>
				<ul className="flex items-center justify-center gap-8 text-2xl capitalize text-black">
					{NAVS.map((nav) => (
						<li
							key={nav.href}
							className="font-bold hover:text-secondary"
						>
							<Link href={nav.href}>{nav.label}</Link>
						</li>
					))}
				</ul>
			</nav>
			<Link
				href={"https://www.facebook.com/messages/t/118295134619790"}
				target="_blank"
			>
				<button className="rounded-lg bg-gradient-to-r from-primary to-secondary px-4 py-2 text-[18px] text-white hover:opacity-80">
					Liên hệ
				</button>
			</Link>
		</header>
	);
}
