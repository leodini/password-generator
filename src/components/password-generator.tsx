import { generatePassword } from "@/lib/generate-password";
import styles from "@/styles/password-generator.module.css";
import {
  hasLetterRegex,
  hasNumberRegex,
  hasSpecialRegex,
} from "@/lib/password-regex";
import { atom, useAtom } from "jotai";
import { valuesAtom } from "./form";

const getValuesAtom = atom((get) => get(valuesAtom));

export const PasswordGenerator = () => {
  const [values] = useAtom(getValuesAtom);

  const getCssClass = (char: string) => {
    if (hasLetterRegex.test(char)) return "letter";
    if (hasNumberRegex.test(char)) return "number";
    if (hasSpecialRegex.test(char)) return "special";
    return "";
  };

  return (
    <div className={styles["password-container"]}>
      {generatePassword(
        values.charsLength,
        values.letters,
        values.numbers,
        values.symbols,
      )
        .split("")
        .map((char) => (
          <span className={`${styles.password} ${styles[getCssClass(char)]}`}>
            {char}
          </span>
        ))}
    </div>
  );
};
