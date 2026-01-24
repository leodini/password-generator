import styles from "@/styles/toggle.module.css";
import { ChangeEvent } from "react";

interface ToggleProps {
  value: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => unknown;
  name: string;
  fieldLabel: string;
}

export const Toggle = ({ value, onChange, name, fieldLabel }: ToggleProps) => {
  return (
    <div className={styles["toggle-container"]}>
      <span>{fieldLabel}</span>
      <label className={styles["toggle"]}>
        <input
          type="checkbox"
          role="switch"
          aria-checked={value}
          tabIndex={0}
          className={styles["toggle-input"]}
          checked={value}
          onChange={onChange}
          name={name}
        />
        <span
          className={`${styles["toggle-span"]} ${value ? "check" : "uncheck"}`}
        ></span>
      </label>
    </div>
  );
};
