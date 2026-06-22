import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Impact from './sections/Impact';
import FeaturedWork from './sections/FeaturedWork';
import Journey from './sections/Journey';
import Publications from './sections/Publications';
import Expertise from './sections/Expertise';
import Archive from './sections/Archive';
import Future from './sections/Future';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Impact />
      <FeaturedWork />
      <Journey />
      <Publications />
      <Expertise />
      <Archive />
      <Future />
      <Footer />
    </main>
  );
}
