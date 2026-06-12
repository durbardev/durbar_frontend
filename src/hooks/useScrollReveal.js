import { useEffect } from "react";

function useScrollReveal() {
    useEffect(() => {
        const elements = document.querySelectorAll("[data-reveal]");

        if (!("IntersectionObserver" in window)) {
            elements.forEach((element) => element.classList.add("is-visible"));
            return undefined;
        }

        document.documentElement.classList.add("motion-ready");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.14, rootMargin: "0px 0px -40px" },
        );

        elements.forEach((element) => observer.observe(element));

        return () => {
            observer.disconnect();
            document.documentElement.classList.remove("motion-ready");
        };
    }, []);
}

export default useScrollReveal;
