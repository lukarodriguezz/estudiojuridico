import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import Advantage from '@/components/Advantage';
import Contact from '@/components/Contact'; // Importa
import Footer from '@/components/Footer';   // Importa

export default function Home() {
  return (
    <main className="bg-surface">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <Advantage />
      <Contact />
      <Footer />
    </main>
  );
}