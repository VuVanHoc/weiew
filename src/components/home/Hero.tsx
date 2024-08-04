export default function Hero() {
	return (
		<section className="relative mt-14 flex h-[250px] w-full flex-col items-center justify-center text-center lg:h-[600px]">
			<h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl font-extrabold uppercase text-transparent lg:text-[150px] lg:leading-[180px]">
				Gen Z review <br />
				trải nghiệm
			</h1>
			<h2 className="mt-2 text-base font-semibold capitalize lg:text-3xl">
				hãy là một gen z thông minh <br />
				để <span className="text-[#F51F47]">chọn đúng</span> trước hàng
				ngàn <span className="text-[#F51F47]">lựa chọn sai</span>
			</h2>
		</section>
	);
}
