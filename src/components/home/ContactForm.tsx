"use client";

import Image from "next/image";
import contact from "/public/contact.png";
import { useState } from "react";

export default function ContactForm() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		reviewTA: false,
		reviewDH: false,
	});
	const [loading, setLoading] = useState(false);

	const handleSubmit = async () => {
		const { name, email, phone, reviewTA, reviewDH } = form;

		if (!name || !email || !phone) {
			alert("Please fill in all fields");
			return;
		}
		if (!reviewTA && !reviewDH) {
			alert("Please select at least one service");
			return;
		}
		let services = [];
		if (reviewDH) {
			services.push("Review Đại học");
		}
		if (reviewTA) {
			services.push("Review Trung tâm Tiếng Anh");
		}
		setLoading(true);
		const response = await fetch("/api/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, phone, services }),
		});

		if (response.ok) {
			setLoading(false);
			setForm({
				name: "",
				email: "",
				phone: "",
				reviewTA: false,
				reviewDH: false,
			});
			alert("Email sent successfully");
		} else {
			setLoading(false);
		}
	};
	return (
		<section
			id="contact-us"
			className="relative mx-8 flex flex-col items-center pt-20 lg:flex-row"
		>
			<div className="flex-1">
				<h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-left text-3xl font-bold capitalize text-transparent lg:text-5xl lg:leading-[58px]">
					Đăng ký ngay để nhận full tài liệu tiếng anh <br />
					<span className="text-lg lg:text-4xl">
						(30+ khoá học, 300+ sách và giáo trình)
					</span>
				</h2>
				<div className="mb-10 mt-6 h-[8px] w-[100px] bg-[#202330]"></div>
				<Image
					src={contact}
					alt="contact"
					className="mx-auto"
					width={500}
				/>
			</div>
			<form className="h-fit w-[400px] rounded-3xl border border-t-8 border-gray-50 border-t-blue-500 bg-white p-10 shadow-lg">
				<p className="text-center text-2xl font-bold">Điền thông tin</p>
				<input
					required
					type="text"
					autoComplete="name"
					name="name"
					placeholder="Name"
					value={form.name}
					onChange={(e) =>
						setForm((prev) => ({ ...prev, name: e.target.value }))
					}
					className="mt-8 w-full rounded-lg border px-4 py-2 outline-blue-400"
				/>
				<input
					type="email"
					required
					autoComplete="email"
					name="email"
					placeholder="Email"
					value={form.email}
					onChange={(e) =>
						setForm((prev) => ({ ...prev, email: e.target.value }))
					}
					className="mt-4 w-full rounded-lg border px-4 py-2 outline-blue-400"
				/>
				<input
					type="tel"
					required
					autoComplete="tel"
					name="phone"
					placeholder="Phone"
					value={form.phone}
					onChange={(e) =>
						setForm((prev) => ({ ...prev, phone: e.target.value }))
					}
					className="mt-4 w-full rounded-lg border px-4 py-2 outline-blue-400"
				/>
				<p className="mt-4 text-sm text-gray-500">
					Lựa chọn dịch vụ bạn muốn tư vấn
				</p>
				<input
					type="checkbox"
					id="reviewTA"
					name="service"
					className="p-4"
					checked={form.reviewTA}
					onChange={(e) =>
						setForm((prev) => ({
							...prev,
							reviewTA: e.target.checked,
						}))
					}
				/>
				{` `}
				<label htmlFor="reviewTA">Review Trung tâm Tiếng Anh</label>
				<br />
				<input
					type="checkbox"
					id="reviewDH"
					name="service"
					checked={form.reviewDH}
					onChange={(e) =>
						setForm((prev) => ({
							...prev,
							reviewDH: e.target.checked,
						}))
					}
				/>
				{` `}
				<label htmlFor="reviewDH">Review Đại học</label>
				<div className="mt-8 flex justify-center">
					<button
						disabled={loading}
						type="button"
						onClick={handleSubmit}
						className="rounded-lg bg-gradient-to-r from-primary to-secondary px-4 py-2 text-[18px] text-white hover:opacity-80"
					>
						{loading ? "SENDING..." : "SEND"}
					</button>
				</div>
			</form>
		</section>
	);
}
