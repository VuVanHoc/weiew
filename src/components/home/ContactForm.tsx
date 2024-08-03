"use client";

import Image from "next/image";
import contact from "/public/contact.png";

export default function ContactForm() {
	return (
		<section
			id="contact-us"
			className="relative mx-8 flex items-center pt-20"
		>
			<div className="flex-1">
				<h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-left text-5xl font-bold capitalize leading-[58px] text-transparent">
					Đăng ký ngay để nhận full tài liệu tiếng anh <br />
					<span className="text-4xl">
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
					name="name"
					placeholder="Name"
					className="mt-8 w-full rounded-lg border px-4 py-2 outline-blue-400"
				/>
				<input
					name="email"
					placeholder="Email"
					className="mt-4 w-full rounded-lg border px-4 py-2 outline-blue-400"
				/>
				<input
					name="phone"
					placeholder="Phone"
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
				/>
				{` `}
				<label htmlFor="reviewTA">Review Trung tâm Tiếng Anh</label>
				<br />
				<input type="checkbox" id="reviewDH" name="service" />
				{` `}
				<label htmlFor="reviewDH">Review Đại học</label>
				<div className="mt-8 flex justify-center">
					<button className="rounded-lg bg-gradient-to-r from-primary to-secondary px-4 py-2 text-[18px] text-white hover:opacity-80">
						SEND
					</button>
				</div>
			</form>
		</section>
	);
}
