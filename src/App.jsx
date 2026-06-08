import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <div className="flex min-h-[200vh] flex-col">
            {/* Header */}
            <Header />

            {/* Footer */}
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
}

export default App;
