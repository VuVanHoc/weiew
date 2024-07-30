export default function Hero() {
	return (
		<section className="relative flex h-[600px] w-full flex-col items-center justify-center bg-[url('/world-map.png')] bg-cover bg-center bg-no-repeat text-center">
			<h1 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-[150px] font-extrabold uppercase leading-[180px] text-transparent">
				Gen Z review <br />
				trải nghiệm
			</h1>
			<h2 className="mt-2 text-3xl font-semibold capitalize">
				hãy là một gen z thông minh <br />
				để <span className="text-[#F51F47]">chọn đúng</span> trước hàng
				ngàn <span className="text-[#F51F47]">lựa chọn sai</span>
			</h2>
		</section>
	);
}
