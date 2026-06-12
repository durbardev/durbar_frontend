import trustedBrands from "../data/trustedBrands";

function TrustedBrands() {
    return (
        <section className="bg-black px-5 pt-0 pb-12 text-white sm:px-8 lg:px-12">
            <div className="mx-auto max-w-[1320px]">
                <div className="grid grid-cols-2 border border-white/10 sm:grid-cols-3 lg:grid-cols-6">
                    {trustedBrands.map((brand) => (
                        <div
                            className="brand-tile grid min-h-28 place-items-center border-r border-b border-white/10 px-6 transition-colors hover:bg-white/5"
                            key={brand.label}
                            data-reveal
                        >
                            <img
                                className="max-h-8 w-full object-contain opacity-60 transition-opacity hover:opacity-100"
                                src={brand.imageUrl}
                                alt={brand.label}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrustedBrands;
