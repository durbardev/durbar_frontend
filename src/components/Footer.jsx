import identity from "../data/identity";
import navigation from "../data/navigation";
import socials from "../data/socials";

function Brand() {
    return (
        <a
            className="inline-flex items-center gap-2.5 text-base font-bold tracking-[-0.03em] text-white"
            href="#home"
        >
            <span
                className="grid size-11 place-items-center bg-red-600"
                aria-hidden="true"
            >
                <svg
                    className="w-8 fill-none stroke-white stroke-2 [stroke-linecap:square] [stroke-linejoin:miter]"
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

function ContactItem({ children, icon }) {
    return (
        <span className="flex items-center gap-2 text-base text-white/50">
            <span className="text-red-600">{icon}</span>
            {children}
        </span>
    );
}

function Footer() {
    return (
        <footer className="bg-[#111] px-5 py-8 text-white sm:px-8 lg:px-12">
            <div className="mx-auto max-w-[1320px]">
                <div className="grid items-center gap-8 py-6 lg:grid-cols-[1fr_auto_1fr]">
                    <Brand />

                    <nav
                        className="flex flex-wrap items-center gap-x-6 gap-y-3 text-base text-white/65"
                        aria-label="Footer navigation"
                    >
                        {navigation.map(({ label, href }) => (
                            <a
                                className="transition-colors hover:text-red-600"
                                href={href}
                                key={label}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex w-fit items-center border border-white/5 lg:justify-self-end">
                        <span className="px-4 text-base text-white/55">
                            Stay Connected
                        </span>
                        {socials.map(({ label, href, iconUrl }) => (
                            <a
                                className="grid size-12 place-items-center border-l border-white/5 transition-colors hover:bg-white/5"
                                href={href}
                                aria-label={label}
                                key={label}
                            >
                                <img
                                    className="size-[18px] object-contain"
                                    src={iconUrl}
                                    alt=""
                                    loading="lazy"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-6 border-t border-white/5 py-7 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap gap-x-6 gap-y-4">
                        <ContactItem
                            icon={
                                <svg
                                    className="size-4 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M2 5h20v14H2V5Zm2.3 2 7.7 5.4L19.7 7H4.3ZM20 9.2l-8 5.6-8-5.6V17h16V9.2Z" />
                                </svg>
                            }
                        >
                            {identity.email}
                        </ContactItem>
                        <ContactItem
                            icon={
                                <svg
                                    className="size-4 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6.6 2 11 6.4 8.4 9a15.5 15.5 0 0 0 6.6 6.6l2.6-2.6 4.4 4.4-2.1 3.3c-.5.8-1.5 1.2-2.4 1C9.7 20 4 14.3 2.3 6.5c-.2-.9.2-1.9 1-2.4L6.6 2Z" />
                                </svg>
                            }
                        >
                            {identity.phone}
                        </ContactItem>
                        <ContactItem
                            icon={
                                <svg
                                    className="size-4 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2a8 8 0 0 0-8 8c0 5.7 8 12 8 12s8-6.3 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                </svg>
                            }
                        >
                            {identity.address}
                        </ContactItem>
                    </div>

                    <p className="text-base text-white/35">
                        {"\u00A9"} {identity.copyrightYear} {identity.name}. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
