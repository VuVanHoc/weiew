import TextAnimated from "../ui/TextAnimated";

export default function Statistics() {
	return (
		<section className="items-between mx-8 flex justify-between gap-2 rounded-2xl bg-gradient-to-r from-primary to-secondary px-2 py-1 text-white shadow-lg lg:gap-0 lg:px-10 lg:py-4">
			<div className="text-center">
				<TextAnimated
					className="text-xl font-bold lg:text-4xl"
					numberPoint={100}
					endContent={
						<span className="text-xl font-bold lg:text-4xl">+</span>
					}
					toFixed={0}
				/>
				<p className="text-xs text-white lg:text-2xl">
					Review Trung tâm TA
				</p>
			</div>
			<div className="border-r border-white" />
			<div className="text-center">
				<TextAnimated
					className="text-xl font-bold lg:text-4xl"
					numberPoint={330}
					toFixed={0}
					endContent={
						<span className="text-xl font-bold lg:text-4xl">+</span>
					}
				/>
				<p className="text-xs text-white lg:text-2xl">Review Đại Học</p>
			</div>
			<div className="border-r border-white" />

			<div className="text-center">
				<TextAnimated
					className="text-xl font-bold lg:text-4xl"
					numberPoint={273}
					toFixed={0}
					endContent={
						<span className="text-xl font-bold lg:text-4xl">+</span>
					}
				/>
				<p className="text-xs text-white lg:text-2xl">
					Đánh Giá Tốt Từ HV
				</p>
			</div>
			<div className="border-r border-white" />

			<div className="text-center">
				<TextAnimated
					className="text-xl font-bold lg:text-4xl"
					numberPoint={50}
					toFixed={0}
					endContent={
						<span className="text-xl font-bold lg:text-4xl">
							K+
						</span>
					}
				/>
				<p className="text-xs text-white lg:text-2xl">
					Tiktok Followers
				</p>
			</div>
		</section>
	);
}
