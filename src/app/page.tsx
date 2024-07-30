import AboutUs from "@/components/home/AboutUs";
import Discover from "@/components/home/Discover";
import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import Header from "@/components/ui/Header";

export default function Home() {
	return (
		<main className="mx-auto min-h-screen max-w-7xl">
			<Header />
			<Hero />
			<Statistics />
			<AboutUs />
			<Discover />
		</main>
	);
}
