// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
	const { name, email, phone, services } = await request.json();

	// Configure the email transport using the default SMTP transport and a GMail account.
	const transporter = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: "vanhoc.amazingyou@gmail.com",
			pass: "aewq eesz guji btzx",
		},
	});

	const mailOptions = {
		from: "vanhoc.amazingyou@gmail.com",
		to: "weiew.company@gmail.com",
		subject: `New contact form submission on WEIEW`,
		html: `
            <p>Form submission from <span style="font-weight: bold">${name}</span></p>
            <ul>
                <li>Name: ${name}</li>
                <li>Email: ${email}</li>
                <li>Phone: ${phone}</li>
                <li>Services: ${services.join(", ")}</li>
            </ul>
        `,
	};

	try {
		await transporter.sendMail(mailOptions);
		return NextResponse.json({ message: "Email sent successfully" });
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ message: "Failed to send email" },
			{ status: 500 },
		);
	}
}
