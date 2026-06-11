import Button from "./Button";

function PrimaryButton({ children, className = "", href, ...props }) {
    return (
        <Button
            className={className}
            href={href}
            {...props}
        >
            {children}
        </Button>
    );
}

export default PrimaryButton;
