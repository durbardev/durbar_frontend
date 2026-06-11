import process from "../data/process";
import PrimaryButton from "./PrimaryButton";

const icons = [
    <>
        <circle cx="14" cy="14" r="7" />
        <path d="m19 19 6 6M14 10v8m-4-4h8" />
    </>,
    <>
        <path d="M5 23 18 10l4 4L9 27l-5 1 1-5Zm10-10 4 4M5 8h6M8 5v6m14 10h6m-3-3v6" />
    </>,
    <>
        <path d="M5 16.5 12 23l15-15" />
        <path d="M26 16v11H5V6h15" />
    </>,
    <>
        <path d="m6 25 5-1 13-13-4-4L7 20l-1 5Zm14-18 3-3 4 4-3 3M12 19l-3-3" />
        <path d="M17 22h10M22 17v10" />
    </>,
];

function ProcessIcon({ index }) {
    return (
        <span className="grid size-12 place-items-center bg-red-600 text-white">
            <svg
                className="size-6 fill-none stroke-current stroke-[1.7] [stroke-linecap:square] [stroke-linejoin:miter]"
                viewBox="0 0 32 32"
                aria-hidden="true"
            >
                {icons[index]}
            </svg>
        </span>
    );
}

function DesktopProcess() {
    const positions = [
        "left-[2%] top-[48%]",
        "left-[27%] top-[32%]",
        "left-[52%] top-[22%]",
        "left-[77%] top-[0%]",
    ];

    return (
        <div className="relative hidden min-h-[560px] lg:block">
            <svg
                className="absolute inset-x-0 top-14 h-[360px] w-full overflow-visible"
                viewBox="0 0 1200 360"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    d="M0 280C125 360 175 340 270 225S465 140 610 170 760 220 850 80 1045 20 1200 42"
                    fill="none"
                    stroke="rgb(220 38 38)"
                    strokeWidth="4"
                    strokeLinecap="square"
                />
            </svg>

            {process.steps.map((step, index) => (
                <article
                    className={`absolute w-[275px] bg-[#101010] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.28)] ${positions[index]}`}
                    key={step.title}
                >
                    <div className="relative">
                        <div className="mb-6 flex items-start justify-between">
                            <ProcessIcon index={index} />
                            <span className="text-5xl leading-none font-bold text-white/8">
                                {index + 1}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold tracking-[-0.035em]">
                            {step.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-white/45">
                            {step.description}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    );
}

function MobileProcess() {
    return (
        <div className="relative mt-12 grid gap-10 border-l border-red-600/40 pl-8 lg:hidden">
            {process.steps.map((step, index) => (
                <article className="relative bg-[#101010] p-6" key={step.title}>
                    <div className="mb-6 flex items-start justify-between">
                        <ProcessIcon index={index} />
                        <span className="text-5xl leading-none font-bold text-white/8">
                            {index + 1}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-[-0.035em]">
                        {step.title}
                    </h3>
                    <p className="mt-3 max-w-[440px] text-sm leading-6 text-white/45">
                        {step.description}
                    </p>
                </article>
            ))}
        </div>
    );
}

function Process() {
    return (
        <section
            id="process"
            className="overflow-hidden bg-black px-5 pt-28 pb-20 text-white sm:px-8 sm:pt-20 lg:px-12 lg:py-28"
        >
            <div className="mx-auto max-w-[1320px]">
                <div className="max-w-[560px]">
                    <p className="mb-4 flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-red-500 uppercase">
                        <span className="h-px w-8 bg-red-600" />
                        {process.eyebrow}
                    </p>
                    <h2 className="text-[44px] leading-[0.98] font-bold tracking-[-0.055em] sm:text-[64px]">
                        {process.title}
                    </h2>
                    <p className="mt-5 max-w-[500px] text-base leading-7 text-white/50">
                        {process.description}
                    </p>
                    <PrimaryButton className="mt-7" href="#contact">
                        Start a project
                    </PrimaryButton>
                </div>

                <DesktopProcess />
                <MobileProcess />
            </div>
        </section>
    );
}

export default Process;
