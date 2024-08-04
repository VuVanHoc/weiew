import Image from "next/image";
import xshape from "/public/x-shape.png";
import oshape from "/public/o-shape.png";
import polygon from "/public/polygon-shape.png";
import aboutUs from "/public/about-us.svg";

export default function AboutUs() {
	return (
		<section className="relative mx-8 mt-8 flex h-auto flex-col items-center pt-[80px] lg:h-[540px] lg:flex-row lg:py-[80px]">
			<div className="flex-1">
				<h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent lg:text-5xl lg:leading-[58px]">
					Về chúng tôi
				</h2>
				<div className="mb-10 mt-6 h-[4px] w-[100px] bg-[#202330] lg:h-[8px]"></div>
				<p className="text-[18px] text-[#989B9F]">
					Weiew là nơi chia sẻ những đánh giá chân thực và chi tiết về
					những thông tin mập mờ của các trung tâm tiếng Anh, phòng
					trọ hay trường đại học. Giúp gen Z lựa chọn đúng trước hàng
					ngàn lựa chọn sai!
				</p>
				<br />
				<p className="text-[18px] text-[#989B9F]">
					🔥 WEIEW ĐÃ LÀM ĐƯỢC VÀ SẼ TIẾP TỤC LÀM:
				</p>
				<ul className="text-[18px] text-[#989B9F]">
					<li>
						➤ Đưa thông tin minh bạch rõ ràng được kiểm chứng tới
						cho mọi người.
					</li>
					<li>
						➤ Đảm bảo quyền lợi tối đa cho các bạn học viên đăng ký
						qua WeieW
					</li>
					<li>
						➤ Cùng học viên kiểm tra thông tin trường học, trung
						tâm, đồng hành trực tiếp hỗ trợ học viên xử lý các vấn
						đề 24/7
					</li>
				</ul>
			</div>
			<Image src={aboutUs} alt="group shape" className="w-[600px]" />
			<Image
				src={xshape}
				alt="group shape"
				className="absolute -right-5 bottom-0"
			/>
			<Image
				src={oshape}
				alt="group shape"
				className="absolute -right-8 bottom-1/2"
			/>
			<Image
				src={polygon}
				alt="group shape"
				className="absolute right-[40%] top-0"
			/>
		</section>
	);
}
