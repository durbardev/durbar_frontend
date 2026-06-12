import hero from "../data/hero";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function Hero() {
    return (
        <main
            id="home"
            className="hero-stage relative grid min-h-[760px] place-items-center overflow-hidden bg-black px-5 pt-32 pb-8 text-white sm:px-8"
        >
            <span className="hero-orbit hero-orbit-one" aria-hidden="true" />
            <span className="hero-orbit hero-orbit-two" aria-hidden="true" />

            <section className="relative mx-auto flex max-w-[920px] flex-col items-center text-center">
                <div className="hero-enter hero-enter-1 mb-7 inline-flex flex-col items-center gap-2 text-center text-base text-white/60 shadow-[0_10px_30px_rgba(255,255,255,0.03)] sm:flex-row sm:text-left">
                    <div className="flex -space-x-2">
                        {hero.avatars.map((avatar) => (
                            <img
                                className="size-6 border border-white object-cover"
                                src={avatar}
                                alt=""
                                loading="lazy"
                                key={avatar}
                            />
                        ))}
                    </div>
                    <span>{hero.badge}</span>
                </div>

                <h1 className="hero-enter hero-enter-2 max-w-[760px] text-[44px] leading-[0.98] font-bold tracking-[-0.07em] text-white sm:text-[64px] lg:text-[82px]">
                    {hero.title}
                </h1>

                <p className="hero-enter hero-enter-3 mt-7 max-w-[620px] text-base leading-7 text-white/55">
                    {hero.description}
                </p>

                <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap items-center justify-center gap-4">
                    <PrimaryButton
                        className="px-7"
                        href={hero.primaryAction.href}
                    >
                        {hero.primaryAction.label}
                    </PrimaryButton>

                    <SecondaryButton
                        className="px-7"
                        href={hero.secondaryAction.href}
                    >
                        {hero.secondaryAction.label}
                    </SecondaryButton>
                </div>
            </section>
        </main>
    );
}

export default Hero;
