interface ButtonProps {
  onClick: () => void;
  variant: "primary" | "secondary";
  label: string;
  disabled: boolean;
  className: string;
  type: "button" | "submit" | "reset";
}

export const Button = ({
  onClick,
  variant,
  label,
  disabled,
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
