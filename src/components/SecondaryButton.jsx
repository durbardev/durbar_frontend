function SecondaryButton({ children, className = "", href = "#", ...props }) {
    return (
        <a
            className={`inline-flex min-h-[42px] items-center justify-center rounded-none bg-white px-6 text-base font-bold text-black transition-colors hover:bg-red-600 hover:text-white ${className}`}
            href={href}
            {...props}
        >
            {children}
        </a>
    );
}

export default SecondaryButton;
