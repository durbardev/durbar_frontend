import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
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

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
