import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { StatsSection } from './components/StatsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
	return (
		<div className="min-h-screen bg-white">
			<Header />
			<main>
				<HeroSection />
				<AboutSection />
				<ServicesSection />
				<ProcessSection />
				<StatsSection />
				<ContactSection />
			</main>
			<Footer />
		</div>
	);
}
