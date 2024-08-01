import AboutUs from "@/components/home/AboutUs";
import ContactForm from "@/components/home/ContactForm";
import CustomerReviews from "@/components/home/CustomerReviews";
import Discover from "@/components/home/Discover";
import Gift from "@/components/home/Gift";
import Hero from "@/components/home/Hero";
import OnSocial from "@/components/home/OnSocial";
import Statistics from "@/components/home/Statistics";
import StorySuccess from "@/components/home/StorySuccess";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
	return (
		<main className="mx-auto min-h-screen max-w-7xl overflow-x-hidden">
			<Header />
			<Hero />
			<Statistics />
			<AboutUs />
			<Discover />
			<Gift />
			<CustomerReviews />
			<StorySuccess />
			<ContactForm />
			<OnSocial />
			<Footer />
		</main>
	);
}
