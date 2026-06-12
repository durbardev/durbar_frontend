import { CalendarDays, Mail, Phone } from "lucide-react";
import identity from "../data/identity";
import PrimaryButton from "./PrimaryButton";

const fieldClass =
    "contact-input min-h-13 w-full border border-white/10 bg-white/[0.035] px-4 text-base text-white outline-none placeholder:text-white/25 focus:border-red-600";

function Detail({ icon, label, value, index }) {
    return (
        <div
            className="contact-detail flex gap-4 border-t border-white/20 py-5"
            style={{ "--contact-delay": `${450 + index * 150}ms` }}
        >
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
            className="overflow-hidden bg-[#171717] px-5 pt-28 pb-20 text-white sm:px-8 sm:pt-20 lg:px-12 lg:py-28"
        >
            <div className="mx-auto max-w-[1320px]">
                <div className="grid shadow-[0_28px_80px_rgba(0,0,0,0.28)] lg:grid-cols-[0.78fr_1.22fr]">
                    <div className="contact-info relative overflow-hidden bg-red-600/85 p-7 sm:p-10 lg:p-12" data-reveal>
                        <svg
                            className="contact-pin pointer-events-none absolute -right-12 -bottom-20 size-[300px] fill-black/10"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 1.5A8.5 8.5 0 0 0 3.5 10C3.5 15.8 12 23 12 23s8.5-7.2 8.5-13A8.5 8.5 0 0 0 12 1.5Zm0 5A3.5 3.5 0 1 0 12 13.5 3.5 3.5 0 0 0 12 6.5Z"
                            />
                        </svg>
                        <div className="relative">
                            <p className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-white/75 uppercase">
                                <span className="h-px w-8 bg-white/70" />
                                Let&apos;s talk
                            </p>
                            <h2 className="max-w-[420px] text-[44px] leading-[0.98] font-bold tracking-[-0.055em] sm:text-[64px]">
                                Book an appointment.
                            </h2>
                            <p className="mt-6 max-w-[400px] text-base leading-7 text-white/70">
                                Tell us what you are building. We will bring the
                                right people, questions, and ideas to the first
                                conversation.
                            </p>

                            <div className="mt-12">
                                <Detail
                                    index={0}
                                    label="Email us"
                                    value={identity.email}
                                    icon={<Mail className="size-5" aria-hidden="true" />}
                                />
                                <Detail
                                    index={1}
                                    label="Call us"
                                    value={identity.phone}
                                    icon={<Phone className="size-5" aria-hidden="true" />}
                                />
                                <Detail
                                    index={2}
                                    label="Availability"
                                    value={"Sunday \u2014 Thursday, 10am \u2014 6pm"}
                                    icon={<CalendarDays className="size-5" aria-hidden="true" />}
                                />
                            </div>
                        </div>
                    </div>

                    <form className="contact-form bg-[#0f0f0f] p-7 sm:p-10 lg:p-12" data-reveal>
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
                            <label className="contact-field grid gap-2 text-sm font-semibold text-white/60">
                                Your name
                                <input className={fieldClass} type="text" placeholder="Full name" />
                            </label>
                            <label className="contact-field grid gap-2 text-sm font-semibold text-white/60">
                                Work email
                                <input className={fieldClass} type="email" placeholder="you@company.com" />
                            </label>
                            <label className="contact-field grid gap-2 text-sm font-semibold text-white/60">
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
                            <label className="contact-field grid gap-2 text-sm font-semibold text-white/60">
                                Preferred date
                                <input className={`${fieldClass} [color-scheme:dark]`} type="date" />
                            </label>
                            <label className="contact-field grid gap-2 text-sm font-semibold text-white/60 sm:col-span-2">
                                Tell us about your project
                                <textarea
                                    className={`${fieldClass} min-h-36 resize-none py-4`}
                                    placeholder="A few details about your goals, timeline, or challenges..."
                                />
                            </label>
                        </div>

                        <PrimaryButton
                            as="button"
                            className="mt-7 min-h-13 w-full px-7 sm:w-auto"
                            type="submit"
                        >
                            Request appointment
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Appointment;
