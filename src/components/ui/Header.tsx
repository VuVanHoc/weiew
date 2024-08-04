"use client";

import Image from "next/image";
import logo from "/public/logo.png";
import menuIcon from "/public/menu.png";

import Link from "next/link";
import { useState } from "react";

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
	const [showNav, setShowNaw] = useState(false);

	return (
		<header className="fixed top-0 z-50 flex w-full max-w-7xl items-center justify-between bg-white p-4 px-8">
			{/* Navbar Mobile */}
			<div className="flex gap-4">
				<Image
					onClick={() => setShowNaw((prev) => !prev)}
					src={menuIcon}
					alt="menu"
					className="lg:hidden"
					height={24}
				/>
				<Link href={"/"}>
					<Image
						src={logo}
						alt="Weiew"
						height={24}
						className="block lg:hidden"
					/>
				</Link>
			</div>
			{showNav && (
				<div
					onClick={() => setShowNaw(false)}
					className="absolute left-0 top-[60px] z-50 h-screen w-full flex-col items-center justify-center gap-4 p-4 pl-8 backdrop-blur-lg"
				>
					{NAVS.map((nav) => (
						<Link
							key={nav.href}
							href={nav.href}
							className="block text-2xl capitalize hover:text-secondary"
						>
							{nav.label}
						</Link>
					))}
				</div>
			)}

			<Link href={"/"}>
				<Image
					src={logo}
					alt="Weiew"
					height={42}
					className="hidden lg:block"
				/>
			</Link>
			{/* Navbar Desktop/PC */}
			<nav className="hidden lg:block">
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
				<button className="rounded-lg bg-gradient-to-r from-primary to-secondary px-2 py-1 text-[18px] text-white hover:opacity-80 lg:px-4 lg:py-2">
					Liên hệ
				</button>
			</Link>
		</header>
	);
}
