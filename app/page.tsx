import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PracticeAreas from '@/components/PracticeAreas';
import Advantage from '@/components/Advantage';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton'; // <-- 1. Importarlo

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <Advantage />
      <Contact />
      <Footer />
      <WhatsAppButton /> {/* <-- 2. Renderizarlo al final */}
    </main>
  );
}