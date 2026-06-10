import portfolio from "../data/portfolio";

function BrowserMockup() {
    return (
        <div className="relative w-[78%] bg-[#111] p-3 shadow-[18px_18px_0_rgba(220,38,38,0.75)]">
            <div className="mb-3 flex gap-1.5">
                <span className="size-1.5 bg-red-600" />
                <span className="size-1.5 bg-white/20" />
                <span className="size-1.5 bg-white/20" />
            </div>
            <div className="grid grid-cols-[0.28fr_1fr] gap-3">
                <div className="min-h-40 bg-white/5 p-3">
                    <span className="block h-2 w-10 bg-red-600" />
                    <span className="mt-4 block h-1.5 w-full bg-white/10" />
                    <span className="mt-2 block h-1.5 w-4/5 bg-white/10" />
                    <span className="mt-2 block h-1.5 w-3/5 bg-white/10" />
                </div>
                <div className="p-2">
                    <div className="grid grid-cols-3 gap-2">
                        <span className="h-12 bg-red-600" />
                        <span className="h-12 bg-white/8" />
                        <span className="h-12 bg-white/8" />
                    </div>
                    <svg className="mt-4 h-20 w-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                        <path d="M0 72C40 68 56 38 92 48s56 18 88-8 54-14 72 1 28-2 48-34" fill="none" stroke="rgb(220 38 38)" strokeWidth="3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

function ProjectVisual({ variant }) {
    if (variant === "dashboard") {
        return (
            <div className="absolute inset-0 flex items-center justify-center bg-[#d8d7d2]">
                <BrowserMockup />
            </div>
        );
    }

    if (variant === "mobile") {
        return (
            <div className="absolute inset-0 grid place-items-center overflow-hidden bg-red-600">
                <span className="absolute -right-16 -top-16 size-56 rounded-full border-[30px] border-white/10" />
                <div className="relative h-[78%] w-[44%] border-[6px] border-[#111] bg-[#e3e1db] p-3 shadow-[14px_14px_0_rgba(0,0,0,0.18)]">
                    <span className="block h-14 bg-[#111]" />
                    <div className="mt-3 grid grid-cols-2 gap-2">
                        <span className="h-12 bg-red-600" />
                        <span className="h-12 bg-[#111]/10" />
                        <span className="h-12 bg-[#111]/10" />
                        <span className="h-12 bg-[#111]" />
                    </div>
                </div>
            </div>
        );
    }

    if (variant === "brand") {
        return (
            <div className="absolute inset-0 grid place-items-center overflow-hidden bg-[#d8d7d2] text-[#111]">
                <span className="absolute -left-5 -top-14 text-[170px] leading-none font-bold text-red-600">F</span>
                <div className="grid size-28 rotate-45 place-items-center border-[11px] border-[#111]">
                    <span className="size-9 bg-red-600" />
                </div>
            </div>
        );
    }

    if (variant === "commerce") {
        return (
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#222]">
                <div className="absolute left-7 top-7 h-[75%] w-[67%] border border-white/10 bg-[#111] p-4">
                    <div className="mb-4 flex justify-between">
                        <span className="h-2 w-16 bg-white/70" />
                        <span className="size-5 bg-red-600" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <span className="h-24 bg-[#d8d7d2]" />
                        <span className="h-24 bg-red-600" />
                        <span className="h-16 bg-white/8" />
                        <span className="h-16 bg-white/8" />
                    </div>
                </div>
            </div>
        );
    }

    if (variant === "learning") {
        return (
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#d8d7d2]">
                <span className="absolute -right-12 -bottom-16 size-56 rounded-full border-[32px] border-red-600/20" />
                <div className="relative w-[72%] bg-[#111] p-5 shadow-[14px_14px_0_rgba(220,38,38,0.75)]">
                    <div className="mb-5 flex items-center justify-between">
                        <span className="h-2 w-20 bg-white/70" />
                        <span className="size-7 rounded-full bg-red-600" />
                    </div>
                    <div className="grid grid-cols-[1fr_0.55fr] gap-3">
                        <span className="h-28 bg-red-600" />
                        <div className="grid gap-2">
                            <span className="bg-white/10" />
                            <span className="bg-white/10" />
                            <span className="bg-white/10" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="absolute inset-0 grid place-items-center overflow-hidden bg-red-600">
            <span className="absolute -left-14 top-0 text-[200px] leading-none font-bold tracking-[-0.12em] text-black/15">M</span>
            <div className="relative w-[68%] border-4 border-[#111] bg-[#d8d7d2] p-6 shadow-[14px_14px_0_rgba(0,0,0,0.2)]">
                <span className="block text-4xl font-bold leading-none tracking-[-0.08em] text-[#111]">MAKE<br />IT MATTER.</span>
                <span className="mt-5 block h-2 w-16 bg-red-600" />
            </div>
        </div>
    );
}

function ProjectCard({ project, height }) {
    return (
        <article
            className="group relative mb-5 break-inside-avoid overflow-hidden bg-[#111]"
            style={{ height }}
        >
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.025]">
                <ProjectVisual variant={project.variant} />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent p-6 pt-20">
                <div className="mb-2 flex justify-between gap-4 text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                </div>
                <h3 className="text-[28px] font-bold tracking-[-0.045em]">{project.title}</h3>
            </div>
        </article>
    );
}

function Portfolio() {
    return (
        <section id="work" className="bg-[#171717] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-[1320px]">
                <header className="mx-auto mb-12 max-w-[720px] text-center">
                    <div>
                        <p className="mb-4 flex items-center justify-center gap-3 text-sm font-semibold tracking-[0.22em] text-red-500 uppercase">
                            <span className="h-px w-8 bg-red-600" />
                            {portfolio.eyebrow}
                            <span className="h-px w-8 bg-red-600" />
                        </p>
                        <h2 className="text-[44px] leading-[0.98] font-bold tracking-[-0.055em] sm:text-[64px]">{portfolio.title}</h2>
                    </div>
                    <p className="mx-auto mt-6 max-w-[560px] text-base leading-7 text-white/50">{portfolio.description}</p>
                </header>

                <div className="relative">
                    <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
                        <ProjectCard project={portfolio.projects[0]} height={470} />
                        <ProjectCard project={portfolio.projects[1]} height={340} />
                        <ProjectCard project={portfolio.projects[2]} height={390} />
                        <ProjectCard project={portfolio.projects[3]} height={520} />
                        <ProjectCard project={portfolio.projects[4]} height={350} />
                        <ProjectCard project={portfolio.projects[5]} height={440} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
