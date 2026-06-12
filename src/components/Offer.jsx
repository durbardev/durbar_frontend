import { ArrowRight, Check } from "lucide-react";
import PrimaryButton from "./PrimaryButton";

const features = [
    "Responsive ecommerce website",
    "Product and order management",
    "Payment gateway integration",
    "Delivery and customer support setup",
];

function Offer() {
    return (
        <section
            id="offer"
            className="relative overflow-hidden bg-red-600 px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
        >
            <span
                className="offer-word pointer-events-none absolute -top-10 right-0 text-[180px] leading-none font-bold tracking-[-0.08em] text-black/[0.08] uppercase sm:text-[300px] lg:text-[430px]"
                aria-hidden="true"
            >
                Offer
            </span>

            <div className="relative mx-auto max-w-[1320px]">
                <header className="mb-12 max-w-[790px]" data-reveal>
                    <p className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-white/70 uppercase">
                        <span className="h-px w-8 bg-white/70" />
                        Limited-time offer
                    </p>
                    <h2 className="text-[44px] leading-[0.98] font-bold tracking-[-0.055em] sm:text-[64px]">
                        Everything you need to start selling online.
                    </h2>
                </header>

                <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
                    <div className="offer-card relative z-10 flex flex-col bg-white p-7 text-black shadow-[0_25px_70px_rgba(70,0,0,0.25)] sm:p-10 lg:p-12" data-reveal>
                        <p className="text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
                            Complete ecommerce solution
                        </p>
                        <div className="mt-5 border-b border-black/10 pb-7">
                            <span className="text-sm font-semibold tracking-[0.18em] text-black/40 uppercase">
                                Only
                            </span>
                            <div className="offer-price mt-1 flex flex-wrap items-end gap-x-3">
                                <p className="text-[58px] leading-none font-bold tracking-[-0.07em] text-black sm:text-[78px]">
                                    18,000
                                </p>
                                <span className="pb-1 text-xl font-bold text-red-600 sm:pb-2">
                                    BDT
                                </span>
                            </div>
                        </div>

                        <ul className="mt-7 grid gap-4">
                            {features.map((feature, index) => (
                                <li
                                    className="offer-feature flex items-center gap-3 text-sm font-medium text-black/65"
                                    style={{ "--feature-delay": `${700 + index * 130}ms` }}
                                    key={feature}
                                >
                                    <span className="grid size-7 shrink-0 place-items-center bg-red-600 text-white">
                                        <Check className="size-4" strokeWidth={2.5} aria-hidden="true" />
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <PrimaryButton className="mt-9 self-start px-7" href="#contact">
                            Claim this offer
                            <ArrowRight className="size-4" aria-hidden="true" />
                        </PrimaryButton>
                    </div>

                    <div className="offer-visual relative min-h-[390px] overflow-hidden border border-white/20 bg-[#090909] shadow-[0_25px_70px_rgba(70,0,0,0.25)] lg:min-h-[600px]" data-reveal>
                        <img
                            className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                            src="/images/ecommerce-offer.png"
                            alt="Ecommerce storefront displayed across desktop and mobile devices"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" aria-hidden="true" />
                        <div className="absolute right-0 bottom-0 left-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                            <p className="max-w-[380px] text-xl leading-tight font-bold tracking-[-0.03em] sm:text-2xl">
                                Designed, developed, and ready to launch.
                            </p>
                            <span className="shrink-0 border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-white/70 uppercase backdrop-blur-sm">
                                Launch ready
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Offer;
