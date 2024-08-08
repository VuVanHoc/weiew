"use client";

import EditorComponent from "@/components/ui/EditorComponent";
import { useState } from "react";

export default function CreateBlogPage() {
	const [content, setContent] = useState("");

	const handleSaveBlog = () => {
		console.log("====================================");
		console.log(content);
		console.log("====================================");
	};
	return (
		<div className="mt-8">
			<div className="mb-2 flex items-center justify-between">
				<h1 className="text-3xl font-bold">Tạo Blog</h1>
				<button
					onClick={handleSaveBlog}
					className="rounded-lg bg-primary px-2 py-1 text-white"
				>
					Lưu bài viết
				</button>
			</div>
			<EditorComponent
				value={content}
				onChange={(value: string) => setContent(value)}
			/>
		</div>
	);
}
