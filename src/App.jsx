import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SalaryCalculator from './components/SalaryCalculator.jsx'
import TaxInfoCard from './components/TaxInfoCard.jsx'
import ArticlesGrid from './components/ArticlesGrid.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Calculator Section */}
      <section id="calculator" className="py-16 px-4">
        <SalaryCalculator />
      </section>

      {/* Tax Info Section */}
      <section id="tax" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <TaxInfoCard
            title="0% Tax Slab"
            description="Income up to ₹2.5 lakh is tax-free."
            rate={0}
          />
          <TaxInfoCard
            title="5% Tax Slab"
            description="Income between ₹2.5–5 lakh is taxed at 5%."
            rate={5}
          />
          <TaxInfoCard
            title="20% & 30% Slabs"
            description="Higher income brackets pay at progressive rates."
            rate={20}
          />
        </div>
      </section>

      {/* Learn / Articles Section */}
      <section id="learn">
        <ArticlesGrid />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
