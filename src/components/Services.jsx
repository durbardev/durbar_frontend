import services from "../data/services";

const icons = {
    web: (
        <>
            <rect x="3" y="5" width="26" height="20" rx="1" />
            <path d="M3 10h26M8 7.5h.01m4 0h.01M11 29h10m-5-4v4M11 16l-4 3 4 3m10-6 4 3-4 3" />
        </>
    ),
    mobile: (
        <>
            <rect x="8" y="2.5" width="16" height="27" rx="2" />
            <path d="M8 7h16M8 24.5h16M14 27h4m-2-16v9m-4-5h8" />
        </>
    ),
    marketing: (
        <>
            <path d="M4 18v-6l18-7v20L4 18Zm18-8 6-2v14l-6-2M8 19v8h7l-2.5-6.5" />
            <path d="M4 12v6" />
        </>
    ),
    package: (
        <>
            <path d="m4 10 12-6 12 6-12 6-12-6Zm0 0v13l12 6 12-6V10M16 16v13" />
            <path d="m10 7 12 6v7" />
        </>
    ),
};

function ServiceIcon({ type }) {
    return (
        <span className="grid size-14 place-items-center bg-red-600 text-white transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            <svg
                className="size-7 fill-none stroke-current stroke-[1.5] [stroke-linecap:square] [stroke-linejoin:miter]"
                viewBox="0 0 32 32"
                aria-hidden="true"
            >
                {icons[type]}
            </svg>
        </span>
    );
}

function ServiceCard({ service, index, className = "" }) {
    return (
        <article
            className={`group relative flex min-h-[260px] flex-col overflow-hidden border border-white/10 bg-[#111] p-7 transition-colors duration-300 hover:bg-[#171717] sm:p-8 ${className}`}
        >
            <span
                className="pointer-events-none absolute -top-10 -right-4 text-[190px] leading-none font-bold tracking-[-0.1em] text-red-600/30 transition-colors duration-500 group-hover:text-red-600/50 sm:text-[240px]"
                aria-hidden="true"
            >
                {index + 1}
            </span>

            <div className="relative flex items-start justify-between">
                <ServiceIcon type={service.icon} />
            </div>

            <div className="relative mt-auto pt-12">
                <h3 className="max-w-[310px] text-[28px] leading-[1.08] font-bold tracking-[-0.045em] sm:text-[32px]">
                    {service.title}
                </h3>
                <p className="mt-4 max-w-[380px] text-sm leading-6 text-white/50">
                    {service.description}
                </p>
            </div>

            <span
                className="absolute bottom-0 left-0 h-1 w-0 bg-red-600 transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
            />
        </article>
    );
}

function Services() {
    return (
        <section
            id="services"
            className="overflow-hidden bg-black px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
        >
            <div className="mx-auto max-w-[1320px]">
                <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-[auto_1fr]">
                    <header className="pb-8 lg:col-span-5 lg:pr-10">
                        <p className="mb-4 flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-red-500 uppercase">
                            <span className="h-px w-8 bg-red-600" />
                            {services.eyebrow}
                        </p>
                        <h2 className="text-[44px] leading-[0.98] font-bold tracking-[-0.055em] sm:text-[64px]">
                            Our Services
                        </h2>
                        <p className="mt-6 max-w-[440px] text-base leading-7 text-white/50">
                            {services.description}
                        </p>
                    </header>

                    <ServiceCard
                        service={services.items[3]}
                        index={3}
                        className="order-4 lg:order-none lg:col-span-5 lg:row-start-2 lg:min-h-[340px]"
                    />

                    <ServiceCard
                        service={services.items[0]}
                        index={0}
                        className="order-1 lg:order-none lg:col-span-3 lg:row-span-2 lg:min-h-[650px]"
                    />

                    <div className="order-2 grid gap-5 lg:order-none lg:col-span-4 lg:row-span-2">
                        <ServiceCard service={services.items[1]} index={1} />
                        <ServiceCard service={services.items[2]} index={2} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
