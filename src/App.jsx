import Appointment from "./components/Appointment";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import TrustedBrands from "./components/TrustedBrands";

function App() {
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
