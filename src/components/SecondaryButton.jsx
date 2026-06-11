import Button from "./Button";

function SecondaryButton({ children, className = "", href, ...props }) {
    return (
        <Button
            className={className}
            href={href}
            variant="secondary"
            {...props}
        >
            {children}
        </Button>
    );
}

export default SecondaryButton;
