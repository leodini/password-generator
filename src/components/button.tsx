import styles from "@/styles/button.module.css";

interface ButtonProps {
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
  type: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = ({
  onClick,
  variant = "primary",
  disabled = false,
  className,
  type = "button",
  children,
  icon,
  ...props
}: ButtonProps) => {
  const buttonVariantStyles = {
    primary: styles["btn-primary"],
    secondary: styles["btn-secondary"],
  };

  return (
    <button
      type={type}
      className={`${buttonVariantStyles[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
};
