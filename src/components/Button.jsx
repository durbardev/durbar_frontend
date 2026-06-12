const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-white text-black hover:bg-red-600 hover:text-white",
};

function Button({
    as: Component = "a",
    children,
    className = "",
    variant = "primary",
    ...props
}) {
    return (
        <Component
            className={`button-motion relative inline-flex min-h-[42px] cursor-pointer items-center justify-center overflow-hidden px-6 text-base font-bold ${variants[variant]} ${className}`}
            {...props}
        >
            <span className="relative z-10 inline-flex items-center gap-3">{children}</span>
        </Component>
    );
}

export default Button;
