"use client";

import { COOKIES } from "@/config/constant";
import { getCookie, setCookie } from "cookies-next";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";

export default function LoginAdminPage() {
	const router = useRouter();

	const accessToken = getCookie(COOKIES.ACCESS_TOKEN);
	const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const username = formData.get("username") as string;
		const password = formData.get("password") as string;

		if (username === "admin" && password === "admin") {
			setCookie(COOKIES.ACCESS_TOKEN, "accessToken");
			router.push("/admin/create-blog");
		} else {
			toast("Tên đăng nhập hoặc mật khẩu không chính xác", {
				type: "error",
			});
		}
	};

	if (accessToken) {
		return redirect("/admin");
	}
	return (
		<div className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-primary to-secondary">
			<div className="mx-auto w-[400px] rounded-lg border bg-white p-4 shadow-lg">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold text-secondary">
						Đăng nhập Admin
					</h1>
					<Image
						src="/logo.png"
						alt="logo"
						width={100}
						height={100}
					/>
				</div>
				<form className="mt-4" onSubmit={handleSignIn}>
					<div>
						<label
							htmlFor="username"
							className="block text-sm font-medium text-gray-700"
						>
							Username
						</label>
						<div className="mt-1">
							<input
								placeholder="Username"
								id="username"
								name="username"
								type="text"
								autoComplete="username"
								required
								className="block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
							/>
						</div>
					</div>
					<br />
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<div className="mt-1">
							<input
								placeholder="Password"
								id="password"
								name="password"
								type="password"
								autoComplete="password"
								required
								className="block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
							/>
						</div>
					</div>
					<br />
					<button
						type="submit"
						className="w-full rounded-md bg-primary px-4 py-2 text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
					>
						Đăng nhập
					</button>
				</form>
			</div>
		</div>
	);
}
