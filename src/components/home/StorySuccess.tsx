"use client";

import Carousel from "react-multi-carousel";
import Image from "next/image";
import xshape from "/public/x-shape.png";
import oshape from "/public/o-shape.png";
import polygon from "/public/polygon-shape.png";
import Link from "next/link";

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

export default function StorySuccess() {
	return (
		<section className="relative items-center lg:pt-[40px]">
			<div className="w-ful mx-auto">
				<h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-3xl font-bold capitalize text-transparent lg:text-5xl lg:leading-[58px]">
					Câu Chuyện Thành Công
				</h2>
				<div className="mx-auto mb-10 mt-6 h-[4px] w-[100px] bg-[#202330] lg:h-[8px]"></div>
				<p className="text-center text-[18px] text-[#989B9F]"></p>
			</div>

			<Carousel
				infinite={true}
				// autoPlay={true}
				ssr={true}
				showDots={true}
				responsive={responsive}
				itemClass="flex justify-center"
				className="mx-auto pt-8 lg:w-[90%] lg:pb-[100px]"
			>
				{/* Story 1 */}
				<div className="flex w-4/5 flex-col gap-4 rounded-[32px] bg-gradient-to-r from-primary to-secondary p-8 text-white shadow-lg lg:flex-row">
					<Image
						src="/phuongthuy.png"
						alt="story-success"
						width={324}
						height={554}
						className="rounded-[32px] lg:h-[554px] lg:w-[324px]"
					/>
					<div>
						<h4 className="text-base font-bold lg:text-2xl">
							Vấn đề: Chưa tìm được trung tâm phù hợp do có quá
							nhiều thông tin, khó để xác định chất lượng trung
							tâm!
						</h4>
						<br />
						<p className="text-sm font-bold lg:text-[18px]">
							Phân tích nhu cầu:
						</p>
						<ul className="list-inside list-disc text-xs lg:text-base">
							<li>
								Học từ nền tảng đến 7.0, mong học phí dưới 40tr
							</li>
							<li>
								Trung tâm uy tín, có cơ sở thuận lợi di chuyển
							</li>
						</ul>
						<br />
						<div className="border-b-[1px] border-white"></div>
						<br />
						<p className="text-sm font-bold lg:text-[18px]">
							Đánh giá:
						</p>
						<blockquote className="text-xs lg:text-base">
							{`"Nhờ được bạn giới thiệu nên em biết tới được weiew
							và được weiew support trong quá trình tìm hiểu trung
							tâm! Về Feedback điểm em ưng thì anh chị tư vấn cực
							kì tận tâm vs thông tin bên weiew chất lượng lắmmm
							mn ơi! Mình không chỉ đc hỗ trợ tìm trung tâm mà còn
							được định hướng cách học và lựa chọn lộ trình học
							hợp lý nhất ... Còn được tặng file tài liệu tự học
							tiếng anh siêu đỉnh nữa, nói chung là 100000 điểm
							cho weiew nhé!`}{" "}
							<br />
							<br />
							Về việc feedback trung tâm đang học thì oke la lắm
							có điều lúc đầu bên này tư vấn nhầm học phí cho mình
							may đc weiew hỗ trợ nên cũng oke à!{`"`}
						</blockquote>
						<br />
						<div className="flex justify-end">
							<Link
								href={
									" https://www.facebook.com/profile.php?id=100030535959370"
								}
								target="_blank"
							>
								<Image
									src={"/icon-messenger.png"}
									alt={"messenger"}
									width={32}
									height={32}
								/>
							</Link>
						</div>
					</div>
				</div>

				{/* Story 2 */}
				<div className="flex w-4/5 flex-col gap-4 rounded-[32px] bg-gradient-to-r from-primary to-secondary p-8 text-white shadow-lg lg:flex-row">
					<Image
						src="/story1.png"
						alt="story-success"
						width={324}
						height={554}
						className="rounded-[32px] lg:h-[554px] lg:w-[324px]"
					/>
					<div>
						<h4 className="text-base font-bold lg:text-2xl">
							Vấn đề: Đã đăng ký ở một trung tâm khác nhưng thấy
							không ổn nên muốn rút học phí và tìm một trung tâm
							chất lượng hơn
						</h4>
						<br />
						<p className="text-sm font-bold lg:text-[18px]">
							Phân tích nhu cầu:
						</p>
						<ul className="list-inside list-disc text-xs lg:text-base">
							<li>Học Toeic 4 kỹ năng với học phí từ 15-20tr</li>
							<li>
								Hỗ trợ xử lý vấn đề với trung tâm cũ và tìm
								trung tâm mới phù hợp hơn
							</li>
						</ul>
						<br />
						<div className="border-b-[1px] border-white"></div>
						<br />
						<p className="text-[18px] font-bold">Đánh giá:</p>
						<blockquote className="text-xs lg:text-base">
							{`"Biết đến weiew qua tiktok với mấy group review tiếng anh, lúc đầu cũng chưa có tin tưởng lắm nên mình mới tự tìm hiểu và đk tại một trung tâm T**  nhưng đến lúc đk xong mới biết là bị sale bên đó tư vấn sai học phí mà cũng do sinh viên mới lên nên chưa biết nhiều và bị chốt sale dù mình chưa học thử lúc đó cũng không biết nhờ ai giúp vì ba mẹ ở quê nên tìm đến weiew. Và đây thật sự là một lựa chọn đúng đắn vì anh tư vấn còn giúp mình đến tận trung tâm để giải quyết! Mình vs 3 đứa bạn đã được trung tâm hỗ trợ toàn bộ chi phí học còn thiếu do bị tư vấn nhầm học phí! Nói chung là cũng okela do sv từ quê lên không có tiền để đóng thêm. Cảm ơn weiew nhiều ạ!!!!"`}{" "}
						</blockquote>
						<br />
						<div className="flex justify-end">
							<Link
								href={
									"https://www.facebook.com/profile.php?id=100009450781973"
								}
								target="_blank"
							>
								<Image
									src={"/icon-messenger.png"}
									alt={"messenger"}
									width={32}
									height={32}
								/>
							</Link>
						</div>
					</div>
				</div>

				{/* Story 3 */}
				<div className="flex w-4/5 flex-col gap-4 rounded-[32px] bg-gradient-to-r from-primary to-secondary p-8 text-white shadow-lg lg:flex-row">
					<Image
						src="/story-bdtdieu.png"
						alt="story-success"
						width={324}
						height={554}
						className="rounded-[32px] lg:h-[554px] lg:w-[324px]"
					/>
					<div>
						<h4 className="text-base font-bold lg:text-2xl">
							Vấn đề: Đã tham khảo và đi nghe tư vấn rất nhiều
							trung tâm, từng bị sales chốt cọc nhưng phát hiện
							trung tâm đó có phốt
						</h4>
						<br />
						<p className="text-sm font-bold lg:text-[18px]">
							Phân tích nhu cầu:
						</p>
						<ul className="list-inside list-disc text-xs lg:text-base">
							<li>
								Học từ 3.0 lên 6.5 Ielts vs học phí từ 25-28tr
							</li>
							<li>
								Yêu cầu giảng viên chất lượng, trung tâm chăm
								sóc học viên tốt và uy tín đảm bảo, ko bị phố
							</li>
						</ul>
						<br />
						<div className="border-b-[1px] border-white"></div>
						<br />
						<p className="text-sm font-bold lg:text-[18px]">
							Đánh giá:
						</p>
						<blockquote className="text-xs lg:text-base">
							“ Mình từng bị một bạn sales cố tình dẫn dắt và lùa
							mình vào một trung tâm không uy tín với tư cách là
							rủ đi học chung, đến tận lúc sau khi chốt cọc tại
							trung tâm đó về nhà mình mới biết bên đó có phốt, từ
							đó mất niềm tin hẳn rồi cũng lặn lội khắp các group
							mới đc một bạn chỉ cho qua bên weiew, nghe lúc đầu
							cũng bán tính bán nghi thui tại khá sợ việc các
							trung tâm kém chất lượng cố tình sale và che mắt các
							bạn sinh viên. Sau khi đc weiew tư vấn với những
							thông tin cực kì chi tiết và chất lượng có hẳn
							feedback các bạn học viên thật rõ ràng nên mình đã
							tin tưởng đăng ký theo bên trung tâm đc recommend!
							Cuối cùng thì may là không thất vọng! weiew uy tín
							nhé! “
						</blockquote>
						<br />
						<div className="flex justify-end">
							<Link
								href={"https://www.facebook.com/bdtdieu.11"}
								target="_blank"
							>
								<Image
									src={"/icon-messenger.png"}
									alt={"messenger"}
									width={32}
									height={32}
								/>
							</Link>
						</div>
					</div>
				</div>
			</Carousel>
			<Image
				src={xshape}
				alt="group shape"
				className="absolute bottom-1/2 left-5"
			/>
			<Image
				src={oshape}
				alt="group shape"
				className="absolute bottom-1/2 right-8"
			/>
			<Image
				src={polygon}
				alt="group shape"
				className="absolute right-[20%] top-20"
			/>
		</section>
	);
}
