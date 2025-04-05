import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Documentation from './components/Documentation';
import Guides from './components/Guides';
import Security from './components/Security';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <ThemeToggle />
      <main className="pt-16">
        <Hero />
        <Features />
        <Pricing />
        <Documentation />
        <Guides />
        <Security />
        <Contact />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;