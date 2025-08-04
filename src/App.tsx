import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { StatsSection } from './components/StatsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useState } from 'react';

export default function App() {
	const [hide, setHide] = useState(true);

	return (
		<>
			{hide ? (
				<button onClick={(prev) => setHide(!prev)}>
					<img src="/1.png" width={1920} height={1080} alt="old-site" />
				</button>
			) : (
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
			)}
		</>
	);
}
