import Appointment from "./components/Appointment";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import TrustedBrands from "./components/TrustedBrands";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
    useScrollReveal();

    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}
            <Header />

            {/* Hero */}
            <Hero />

            {/* Trusted Brands */}
            <TrustedBrands />

            {/* Services */}
            <Services />

            {/* Process */}
            <Process />

            {/* Portfolio */}
            <Portfolio />

            {/* Offer */}
            <Offer />

            {/* Reviews */}
            <Reviews />

            {/* Appointment */}
            <Appointment />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
