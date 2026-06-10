import identity from "../data/identity";

const fieldClass =
    "min-h-13 w-full border border-white/10 bg-white/[0.035] px-4 text-base text-white outline-none transition-colors placeholder:text-white/25 focus:border-red-600";

function Detail({ icon, label, value }) {
    return (
        <div className="flex gap-4 border-t border-white/20 py-5">
            <span className="grid size-11 shrink-0 place-items-center bg-black/15 text-white">
                {icon}
            </span>
            <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-white/55 uppercase">
                    {label}
                </p>
                <p className="mt-1 font-bold text-white">{value}</p>
            </div>
        </div>
    );
}

function Appointment() {
    return (
        <section
            id="contact"
            className="overflow-hidden bg-[#171717] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
        >
            <div className="mx-auto max-w-[1320px]">
                <div className="grid shadow-[0_28px_80px_rgba(0,0,0,0.28)] lg:grid-cols-[0.78fr_1.22fr]">
                    <div className="relative overflow-hidden bg-red-600/85 p-7 sm:p-10 lg:p-12">
                        <span
                            className="pointer-events-none absolute -right-8 -bottom-28 text-[310px] leading-none font-bold tracking-[-0.14em] text-black/10"
                            aria-hidden="true"
                        >
                            D
                        </span>
                        <div className="relative">
                            <p className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-white/75 uppercase">
                                <span className="h-px w-8 bg-white/70" />
                                Let&apos;s talk
                            </p>
                            <h2 className="max-w-[420px] text-[42px] leading-[0.98] font-bold tracking-[-0.055em] sm:text-[58px]">
                                Book an appointment.
                            </h2>
                            <p className="mt-6 max-w-[400px] text-base leading-7 text-white/70">
                                Tell us what you are building. We will bring the
                                right people, questions, and ideas to the first
                                conversation.
                            </p>

                            <div className="mt-12">
                                <Detail
                                    label="Email us"
                                    value={identity.email}
                                    icon={
                                        <svg className="size-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M2 5h20v14H2V5Zm2.3 2 7.7 5.4L19.7 7H4.3ZM20 9.2l-8 5.6-8-5.6V17h16V9.2Z" />
                                        </svg>
                                    }
                                />
                                <Detail
                                    label="Call us"
                                    value={identity.phone}
                                    icon={
                                        <svg className="size-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M6.6 2 11 6.4 8.4 9a15.5 15.5 0 0 0 6.6 6.6l2.6-2.6 4.4 4.4-2.1 3.3c-.5.8-1.5 1.2-2.4 1C9.7 20 4 14.3 2.3 6.5c-.2-.9.2-1.9 1-2.4L6.6 2Z" />
                                        </svg>
                                    }
                                />
                                <Detail
                                    label="Availability"
                                    value="Sunday — Thursday, 10am — 6pm"
                                    icon={
                                        <svg className="size-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                                            <path d="M4 4h16v16H4V4Zm0 5h16M8 2v4m8-4v4m-7 7h2m3 0h2m-7 3h2" />
                                        </svg>
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <form className="bg-[#0f0f0f] p-7 sm:p-10 lg:p-12">
                        <div className="mb-10">
                            <div>
                                <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-red-500 uppercase">
                                    <span className="h-px w-8 bg-red-600" />
                                    Appointment request
                                </p>
                                <h3 className="mt-3 text-[30px] leading-tight font-bold tracking-[-0.045em] sm:text-[38px]">
                                    Choose a time to start.
                                </h3>
                            </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className="grid gap-2 text-sm font-semibold text-white/60">
                                Your name
                                <input className={fieldClass} type="text" placeholder="Full name" />
                            </label>
                            <label className="grid gap-2 text-sm font-semibold text-white/60">
                                Work email
                                <input className={fieldClass} type="email" placeholder="you@company.com" />
                            </label>
                            <label className="grid gap-2 text-sm font-semibold text-white/60">
                                Service needed
                                <select className={fieldClass} defaultValue="">
                                    <option value="" disabled className="bg-[#111]">
                                        Select a service
                                    </option>
                                    <option className="bg-[#111]">Web Development</option>
                                    <option className="bg-[#111]">Mobile App Development</option>
                                    <option className="bg-[#111]">Brand and Marketing</option>
                                    <option className="bg-[#111]">Full Package</option>
                                </select>
                            </label>
                            <label className="grid gap-2 text-sm font-semibold text-white/60">
                                Preferred date
                                <input className={`${fieldClass} [color-scheme:dark]`} type="date" />
                            </label>
                            <label className="grid gap-2 text-sm font-semibold text-white/60 sm:col-span-2">
                                Tell us about your project
                                <textarea
                                    className={`${fieldClass} min-h-36 resize-none py-4`}
                                    placeholder="A few details about your goals, timeline, or challenges..."
                                />
                            </label>
                        </div>

                        <button
                            className="mt-7 inline-flex min-h-13 w-full items-center justify-center bg-red-600 px-7 text-base font-bold text-white transition-colors hover:bg-red-700 sm:w-auto"
                            type="submit"
                        >
                            Request appointment
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Appointment;
