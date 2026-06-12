import { Globe, Megaphone, Package, Smartphone } from "lucide-react";
import services from "../data/services";

const icons = {
    web: Globe,
    mobile: Smartphone,
    marketing: Megaphone,
    package: Package,
};

function ServiceIcon({ type }) {
    const Icon = icons[type];

    return (
        <span className="grid size-14 place-items-center bg-red-600 text-white transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            <Icon className="size-7" strokeWidth={1.5} aria-hidden="true" />
        </span>
    );
}

function ServiceCard({ service, index, className = "" }) {
    return (
        <article
            className={`service-card-${index + 1} group relative flex min-h-[260px] flex-col overflow-hidden border border-white/10 bg-[#111] p-7 transition-colors duration-300 hover:bg-[#171717] sm:p-8 ${className}`}
            data-reveal
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
            className="overflow-hidden bg-[#171717] px-5 pt-28 pb-20 text-white sm:px-8 sm:pt-20 lg:px-12 lg:py-28"
        >
            <div className="mx-auto max-w-[1320px]">
                <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-[auto_1fr]">
                    <header className="pb-8 lg:col-span-5 lg:pr-10" data-reveal>
                        <p className="mb-4 flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-red-500 uppercase">
                            <span className="h-px w-8 bg-red-600" />
                            {services.eyebrow}
                        </p>
                        <h2 className="text-[44px] leading-[0.98] font-bold tracking-[-0.055em] sm:text-[64px]">
                            {services.title}
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
