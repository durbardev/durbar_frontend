import { useEffect, useState } from "react";
import identity from "../data/identity";
import navigation from "../data/navigation";
import PrimaryButton from "./PrimaryButton";

function Logo() {
    return (
        <a
            className="inline-flex items-center gap-2.5 text-[17px] font-bold tracking-[-0.03em] text-white"
            href="#home"
            aria-label="Durbar home"
        >
            <span
                className="grid size-[38px] place-items-center rounded-none bg-red-600"
                aria-hidden="true"
            >
                <svg
                    className="w-7 fill-none stroke-white stroke-2 [stroke-linecap:square] [stroke-linejoin:miter]"
                    viewBox="0 0 36 36"
                >
                    <path d="M18 3 31 10.5v15L18 33 5 25.5v-15L18 3Z" />
                    <path d="m10.5 13.5 7.5 4.3 7.5-4.3M18 17.8v9" />
                </svg>
            </span>
            <span>{identity.name}</span>
        </a>
    );
}

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 16);

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 max-[900px]:p-3 ${
                isScrolled
                    ? "bg-black px-8 py-2.5 shadow-[0_1px_0_rgba(255,255,255,0.08)]"
                    : "bg-transparent px-8 py-[18px]"
            }`}
        >
            <div
                className={`relative mx-auto flex min-h-[70px] w-full max-w-[1320px] items-center justify-between border px-[18px] transition-colors max-[900px]:min-h-[62px] max-[900px]:px-3 ${
                    isScrolled
                        ? "border-transparent bg-transparent"
                        : "border-white/5 bg-black/70"
                }`}
            >
                <Logo />

                <nav
                    className={`absolute left-1/2 flex -translate-x-1/2 items-center gap-1 max-[900px]:top-[calc(100%+1px)] max-[900px]:right-[-1px] max-[900px]:left-[-1px] max-[900px]:translate-x-0 max-[900px]:border max-[900px]:border-white/10 max-[900px]:bg-black max-[900px]:p-2.5 ${
                        isMenuOpen ? "max-[900px]:grid" : "max-[900px]:hidden"
                    }`}
                    aria-label="Primary navigation"
                >
                    {navigation.slice(0, -1).map(({ label, href }, index) => (
                        <a
                            className={`px-[15px] py-3 text-base font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white max-[900px]:px-3 max-[900px]:py-[13px] ${
                                index === 0 ? "bg-white/10 text-white" : ""
                            }`}
                            href={href}
                            key={label}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <PrimaryButton
                        className="max-[520px]:hidden"
                        href="#contact"
                    >
                        Contact Us
                    </PrimaryButton>{" "}
                    <button
                        className="hidden size-[42px] cursor-pointer rounded-none border-0 bg-red-600 p-2.5 max-[900px]:block"
                        type="button"
                        aria-label="Toggle navigation"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <span className="my-1 block h-0.5 bg-white" />
                        <span className="my-1 block h-0.5 bg-white" />
                        <span className="my-1 block h-0.5 bg-white" />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
