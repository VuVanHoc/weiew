import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "Weiew - Gen Z Review trải nghiệm",
	description:
		"Hãy là một gen Z thông minh để chọn đúng trước hàng ngàn lựa chọn sai",
	openGraph: {
		title: "WeieW",
		description:
			"Hãy là một gen Z thông minh để chọn đúng trước hàng ngàn lựa chọn sai",
		images: "https://weiew.vn/opengraph.jpg",
		emails: "weiew.company@gmail.com",
		siteName: "WeieW",
		url: "https://weiew.vn",
		type: "website",
		locale: "vn_VN",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
