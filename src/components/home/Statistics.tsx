import TextAnimated from "../ui/TextAnimated";

export default function Statistics() {
	return (
		<section className="items-between from-primary to-secondary mx-8 flex justify-between rounded-2xl bg-gradient-to-r px-4 py-4 text-white shadow-lg">
			<div className="text-center">
				<TextAnimated
					className="text-4xl font-bold"
					numberPoint={100}
					endContent={<span className="text-4xl font-bold">+</span>}
					toFixed={0}
				/>
				<p className="text-2xl text-white">Review Trung tâm TA</p>
			</div>
			<div className="border-r border-white" />
			<div className="text-center">
				<TextAnimated
					className="text-4xl font-bold"
					numberPoint={330}
					toFixed={0}
					endContent={<span className="text-4xl font-bold">+</span>}
				/>
				<p className="text-2xl text-white">Review Đại Học</p>
			</div>
			<div className="border-r border-white" />

			<div className="text-center">
				<TextAnimated
					className="text-4xl font-bold"
					numberPoint={273}
					toFixed={0}
					endContent={<span className="text-4xl font-bold">+</span>}
				/>
				<p className="text-2xl text-white">Đánh Giá Tốt Từ HV</p>
			</div>
			<div className="border-r border-white" />

			<div className="text-center">
				<TextAnimated
					className="text-4xl font-bold"
					numberPoint={50}
					toFixed={0}
					endContent={<span className="text-4xl font-bold">K+</span>}
				/>
				<p className="text-2xl text-white">Tiktok Followers</p>
			</div>
		</section>
	);
}
