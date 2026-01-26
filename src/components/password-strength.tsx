import { checkPasswordStrength } from "@/lib/check-password-strength";
import styles from "@/styles/password-strength.module.css";

export const PasswordStrength = ({ password }: { password?: string }) => {
  const passwordStrength = checkPasswordStrength(password as string);
  return (
    <div className={styles["average-range"]}>
      <div className={styles["range-wrapper"]}>
        <div className={styles[passwordStrength]}></div>
      </div>
      <span>{passwordStrength}</span>
    </div>
  );
};
