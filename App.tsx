import { Header } from './src/components/Header';
import { HeroSection } from './src/components/HeroSection';
import { AboutSection } from './src/components/AboutSection';
import { ServicesSection } from './src/components/ServicesSection';
import { ProcessSection } from './src/components/ProcessSection';
import { StatsSection } from './src/components/StatsSection';
import { ContactSection } from './src/components/ContactSection';
import { Footer } from './src/components/Footer';

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
