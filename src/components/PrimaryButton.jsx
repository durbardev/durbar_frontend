function PrimaryButton({ children, className = "", href = "#", ...props }) {
    return (
        <a
            className={`inline-flex min-h-[42px] items-center justify-center rounded-none bg-red-600 px-6 text-base font-bold text-white transition-colors hover:bg-red-700 ${className}`}
            href={href}
            {...props}
        >
            {children}
        </a>
    );
}

export default PrimaryButton;
