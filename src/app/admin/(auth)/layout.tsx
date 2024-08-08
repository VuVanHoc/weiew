"use client";

import { COOKIES } from "@/config/constant";
import clsx from "clsx";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navs = [
	{
		href: "/admin/create-blog",
		label: "Tạo Blog",
	},
	{
		href: "/admin/blogs",
		label: "Quản lý Blogs",
	},
];
export default function LayoutAdmin({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathName = usePathname();

	return (
		<main className="mx-auto max-w-5xl">
			<header className="flex items-center justify-between border-b py-4">
				<div className="flex items-center gap-2">
					<Image
						src={"/logo.png"}
						alt="WeiewAdmin"
						width={150}
						height={70}
					/>
				</div>
				<ul className="flex gap-4 text-xl font-bold">
					{navs.map((nav) => (
						<Link
							href={nav.href}
							key={nav.href}
							className={clsx(
								"text-black",
								pathName === nav.href && "text-secondary",
							)}
						>
							{nav.label}
						</Link>
					))}
				</ul>
				<div className="text-right">
					<p>Xin chào, Admin WeieW</p>
					<button
						className="rounded-lg bg-red-500 px-2 py-1 text-white"
						onClick={() => {
							deleteCookie(COOKIES.ACCESS_TOKEN);
							window.location.href = "/admin/login";
						}}
					>
						Đăng xuất
					</button>
				</div>
			</header>
			{children}
		</main>
	);
}
