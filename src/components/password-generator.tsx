import { generatePassword } from "@/lib/generate-password";
import styles from "@/styles/password-generator.module.css";
import {
  hasLetterRegex,
  hasNumberRegex,
  hasSpecialRegex,
} from "@/lib/password-regex";
import { atom, useAtom } from "jotai";
import { copyClipboardAtom, valuesAtom } from "./form";
import { useEffect, useMemo, useRef } from "react";
import { copyToClipboard } from "@/lib/copy-to-clipboard";

const getValuesAtom = atom((get) => get(valuesAtom));
const copyToClipboardAtom = atom(
  (get) => get(copyClipboardAtom),
  (_get, set, newValue: boolean) => {
    set(copyClipboardAtom, newValue);
  },
);

export const PasswordGenerator = () => {
  const [values] = useAtom(getValuesAtom);
  const [clipboard, setClipboard] = useAtom(copyToClipboardAtom);
  const ref = useRef<HTMLDivElement | null>(null);

  const getCssClass = (char: string) => {
    if (hasLetterRegex.test(char)) return "letter";
    if (hasNumberRegex.test(char)) return "number";
    if (hasSpecialRegex.test(char)) return "special";
    return "";
  };

  useEffect(() => {
    if (clipboard) copyText();
  }, [clipboard]);

  const copyText = () => {
    if (ref.current) {
      const spans = ref.current.querySelectorAll("span");
      const textToCopy = Array.from(spans)
        .map((s) => s.textContent)
        .join("");
      copyToClipboard(textToCopy);
      setClipboard(false);
    }
  };

  const memoized = useMemo(
    () =>
      generatePassword(
        values.charsLength,
        values.letters,
        values.numbers,
        values.symbols,
      ),
    [values],
  );

  return (
    <div className={styles["password-container"]} ref={ref}>
      {memoized.split("").map((char) => (
        <span className={`${styles.password} ${styles[getCssClass(char)]}`}>
          {char}
        </span>
      ))}
    </div>
  );
};
