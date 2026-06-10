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
            className={`inline-flex min-h-[42px] items-center justify-center px-6 text-base font-bold transition-colors ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
}

export default Button;
