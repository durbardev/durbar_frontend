import reviews from "../data/reviews";
import PrimaryButton from "./PrimaryButton";

function Avatar({ review, small = false }) {
    return (
        <span
            className={`grid shrink-0 place-items-center font-bold text-white ${review.tone} ${
                small ? "size-9 text-xs" : "size-11 text-sm"
            }`}
        >
            {review.initials}
        </span>
    );
}

function Stars() {
    return (
        <span className="tracking-[0.12em] text-red-500" aria-label="5 out of 5 stars">
            {"\u2605\u2605\u2605\u2605\u2605"}
        </span>
    );
}

function ReviewCard({ review, featured = false }) {
    return (
        <article
            className={`flex flex-col bg-[#111] p-6 transition-colors duration-300 hover:bg-[#151515] ${
                featured ? "min-h-[470px] sm:p-8" : "min-h-[220px]"
            }`}
        >
            <div className="flex items-center justify-between gap-4 text-xs text-white/25">
                <Stars />
                <span>5.0 / 5.0</span>
            </div>
            <blockquote
                className={`mt-6 leading-relaxed tracking-[-0.02em] text-white/75 ${
                    featured ? "text-xl sm:text-2xl" : "text-base"
                }`}
            >
                {"\u201C"}
                {review.quote}
                {"\u201D"}
            </blockquote>
            <div className="mt-auto flex items-center gap-3 pt-8">
                <Avatar review={review} />
                <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="mt-0.5 text-xs text-white/35">{review.role}</p>
                </div>
            </div>
        </article>
    );
}

function Reviews() {
    return (
        <section
            id="reviews"
            className="overflow-hidden bg-black px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
        >
            <div className="mx-auto max-w-[1320px]">
                <div className="mb-14 grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-end">
                    <div>
                        <p className="mb-5 flex items-center gap-3 text-sm font-semibold tracking-[0.22em] text-red-500 uppercase">
                            <span className="h-px w-8 bg-red-600" />
                            Client reviews
                        </p>
                        <p className="mb-2 text-[52px] leading-none font-bold tracking-[-0.06em] text-red-600 sm:text-[72px]">
                            {reviews.count}
                        </p>
                        <h2 className="text-[28px] leading-tight font-bold tracking-[-0.04em] sm:text-[36px]">
                            Reviews from industry leaders
                        </h2>
                    </div>

                    <div className="lg:justify-self-end">
                        <div className="flex items-center">
                            <div className="flex -space-x-2">
                                {reviews.items.slice(0, 5).map((review) => (
                                    <span className="border-2 border-black" key={review.name}>
                                        <Avatar review={review} small />
                                    </span>
                                ))}
                            </div>
                            <p className="ml-4 max-w-[230px] text-base leading-6 text-white/60">
                                <strong className="text-white">{reviews.audience} people</strong>{" "}
                                already trust our services.
                            </p>
                        </div>
                        <div className="mt-6">
                            <PrimaryButton href="#contact">Start a project</PrimaryButton>
                        </div>
                    </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-[0.78fr_1.35fr]">
                    <ReviewCard review={reviews.items[0]} featured />
                    <div className="grid gap-5 sm:grid-cols-2">
                        {reviews.items.slice(1).map((review) => (
                            <ReviewCard review={review} key={review.name} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
