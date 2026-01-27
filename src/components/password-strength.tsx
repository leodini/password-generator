import { checkPasswordStrength } from "@/lib/check-password-strength";
import styles from "@/styles/password-strength.module.css";
import { ShieldPlus } from "lucide-react";

const labels = {
  weak: "Weak",
  medium: "Average",
  strong: "Very Secure",
};

export const PasswordStrength = ({ password }: { password?: string }) => {
  const passwordStrength = checkPasswordStrength(password as string);

  const labelStyle = `pwd-label-${passwordStrength}`;

  return (
    <div className={styles["average-range"]}>
      <div className={styles["range-wrapper"]}>
        <div className={styles[passwordStrength]}></div>
      </div>
      <div className={`${styles["pwd-label-container"]} ${styles[labelStyle]}`}>
        <ShieldPlus size={16} />
        <span className={`${styles["pwd-strength"]}`}>
          {labels[passwordStrength as keyof typeof labels]}
        </span>
      </div>
    </div>
  );
};
