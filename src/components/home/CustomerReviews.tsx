"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";

const reviews = [
	{
		id: 1,
		date: "1 May 2023",
		name: "Esther Ng",
		des: "Web hữu ích và uy tín, vô tình đọc được cmt ở gr khác nhắc tới Weiew, mình tìm thử và bất ngờ với những gì bản thân có thể nhận được. ",
	},
	{
		id: 2,
		date: "30 November 2023",
		name: "Đại Hoàng Nam",
		des: `quá bất công vì bạn bè giới thiệu WeieW hơi chậm. Mà cũng vì phần mình... Muốn tìm trung tâm uy tín mà không biết xem review ở đâu" người thật việc thật". Và sau khi theo dõi thì siêuuuu recommend mọi người page này luôn vì thông tin uy tín và chứng cứ xác thực tin cậy.`,
	},
	{
		id: 3,
		name: "Nguyễn Dương",
		des: "WeieW cung cấp miễn phí nhiều tài liệu tiếng anh hay và chất lượng kèm thêm các ad rất đáng iu.  10 đỉm",
		date: "20 November 2023",
	},
	{
		id: 4,
		name: "Hằng Đặng",
		des: "Mình tìm được nhiều tài liệu hữu ích ở đây, thật may mắn khi có thể tìm được một nơi uy tín thế này giữa một rừng những trung tâm tiếng anh chưa rõ chất lượng",
		date: "5 October 2023",
	},
	{
		id: 5,
		name: "Phương Linhh",
		date: "26 August 2023",
		des: "Sốp nhiệt tình, dễ thương, vui tính quá trời quá đất. Hỏi gì đáp nấy đúng trọng tâm, không lòng vòng, không chạy quảng cáo và vô cùng uy tín nè. Tui toàn hỏi sốp vào giờ ngoài hành tinh mà sốp vẫn rấc là nhiệt tình, hoan hỉii. Tinh hoa hội tụ, học sinh sinh viên gấc iuuuu ncl 10000 đỉm ",
	},
	{
		id: 6,
		name: "Phan Xuân Mai",
		date: "19 September 2023",
		des: "Trong lúc mình đang loay hoay không biết tìm trung tâm nào uy tính để ôn luyện tiếng anh, những review tài liệu, trung tâm tiếng anh ở cộng đồng WeieW đã giúp mình tìm kím nơi phù hợp nhất. Thong tin bên WeieW rất chất lượng và đáng tin cậy, nhờ có những reviews chân thật thế này mình mới tìm đc trung tâm tiếng anh uy tín ",
	},
	{
		id: 7,
		name: "Bùi Đình Thái Diệu",
		date: "2 August 2023",
		des: "Page uy tín tìm đc chỗ học chất lượng sau khi đc page hỗ trợ. Admin phát triển tốt nhé cái này mn cần chứ giờ seller nhiều vs seeding chả biết đâu mà lần",
	},
	{
		id: 8,
		name: "Vũ Hải",
		date: "2 Setember 2023",
		des: "Page trả lời nhanh , nhiệt tình ạ . Giữa lúc thời thế rối reng người sale nhiều gấp đôi người học thế này rất cần 1 người có tâm như page để tìm được chỗ học uy tín ",
	},
	{
		id: 9,
		name: "Nguyen Linh",
		date: "16 September 2023",
		des: "Cảm ơn ad đã chia sẻ tài liệu tiếng anh, nhờ tài liệu mà em đã đạt aim được ielts để xét tuyển vào đại học. Chúc page được nhiều người biết đến và viral nha",
	},
];

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
export default function CustomerReviews() {
	return (
		<section
			id="feedback"
			className="relative items-center bg-[url('/wave-1.png')] bg-contain bg-center bg-no-repeat py-[40px] lg:pt-20"
		>
			<div className="mx-auto w-full lg:w-2/3">
				<h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-2xl font-bold capitalize text-transparent lg:text-5xl lg:leading-[58px]">
					Trải nghiệm sau khi dùng dịch vụ
				</h2>
				<div className="mx-auto mb-4 mt-6 h-[4px] w-[100px] bg-[#202330] lg:mb-10 lg:h-[8px]"></div>
				<p className="text-center text-sm text-[#989B9F] lg:text-[18px]">
					Feedback của các bạn gen z sau khi đã được WeieW hỗ trợ!
					<br />
					Luôn tự hào và cố gắng duy trì 100% feedback tốt
				</p>
			</div>
			<div className="mx-auto mt-8 w-full justify-center lg:w-full">
				<Carousel
					infinite={true}
					autoPlay={true}
					showDots={true}
					ssr={true}
					itemClass="px-4"
					responsive={responsive}
					className="mx-auto w-4/5 pb-[100px] pt-8"
				>
					{reviews.map((review) => (
						<div
							key={review.id}
							className="relative h-full rounded-lg border border-gray-100 bg-white p-2 shadow-lg lg:p-8"
						>
							<Image
								className="absolute -top-3 right-4"
								src="/double-comma.png"
								alt="star"
								width={50}
								height={50}
							/>
							<div className="flex gap-2">
								<div className="aspect-square h-[60px] w-[60px] rounded-full bg-slate-500"></div>
								<div>
									<p className="flex items-center gap-2">
										<span className="w-[150px] overflow-hidden text-ellipsis text-nowrap bg-gradient-to-r from-primary to-secondary bg-clip-text text-lg font-bold text-transparent">
											{review.name}
										</span>
										<Image
											src="/Vector.png"
											alt="star"
											width={20}
											height={20}
										></Image>
										<span className="text-sm">
											recommends
										</span>
									</p>
									<p className="text-sm font-semibold text-[#989B9F]">
										WEIEW - Gen Z Review Trải Nghiệm
									</p>
									<p>{review.date}</p>
								</div>
							</div>
							<p className="mt-4 h-[70px] overflow-hidden text-ellipsis">
								{`"`}
								{review.des}
								{`"`}
							</p>
						</div>
					))}
				</Carousel>
			</div>
		</section>
	);
}
