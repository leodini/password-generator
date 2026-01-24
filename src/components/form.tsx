import { atom, useAtom } from "jotai";
import { formOptions, useForm } from "@tanstack/react-form";
import { Toggle } from "./toggle";
import { useEffect } from "react";
import { DEFAULT_VALUES } from "@/constants/default-values";
import styles from "@/styles/form.module.css";

const formOptsRandom = formOptions({
  defaultValues: {
    charsLength: DEFAULT_VALUES.form.random.length,
    numbers: DEFAULT_VALUES.form.random.hasNumbers,
    letters: DEFAULT_VALUES.form.random.hasLetters,
    symbols: DEFAULT_VALUES.form.random.hasSymbols,
  },
});

const formOptsPin = formOptions({
  defaultValues: {
    charsLength: DEFAULT_VALUES.form.pin.length,
    numbers: DEFAULT_VALUES.form.pin.hasNumbers,
    letters: DEFAULT_VALUES.form.pin.hasLetters,
    symbols: DEFAULT_VALUES.form.pin.hasSymbols,
  },
});

export const valuesAtom = atom(formOptsRandom.defaultValues);

export const Form = ({ type = "random" }: { type: "random" | "pin" }) => {
  const [, setValues] = useAtom(valuesAtom);
  const formOpts = type === "random" ? formOptsRandom : formOptsPin;
  const form = useForm({
    ...formOpts,
    onSubmit: async ({ value }) => {
      setValues(value);
    },
  });

  useEffect(() => {
    const newValue =
      type === "random"
        ? formOptsRandom.defaultValues
        : formOptsPin.defaultValues;
    setValues(newValue);
  }, [type]);

  useEffect(() => {
    const unsub = form.store.subscribe(() => {
      setValues(form.store.state.values);
    });

    return unsub;
  }, [form.store]);

  return (
    <div className={styles.form}>
      <form.Field
        name="charsLength"
        children={(field) => (
          <div className={styles["range-container"]}>
            <input
              type="range"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              max={50}
              min={5}
            />
            <span className={styles["range-value"]}>{field.state.value}</span>
          </div>
        )}
      ></form.Field>
      <form.Field
        name="numbers"
        children={(field) => (
          <Toggle
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.checked)}
            name={field.name}
            fieldLabel="Numbers"
          />
        )}
      ></form.Field>
      <form.Field
        name="symbols"
        children={(field) => (
          <Toggle
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.checked)}
            name={field.name}
            fieldLabel="Symbols"
          />
        )}
      ></form.Field>
      <div className={styles["buttons-container"]}>
        <button
          type="submit"
          onClick={() => form.handleSubmit({ submitAction: "refresh" })}
        >
          Refresh Password
        </button>
        <button
          type="submit"
          className={styles["btn-primary"]}
          onClick={() => form.handleSubmit({ submitAction: "refresh" })}
        >
          Copy Password to Clipboard
        </button>
      </div>
    </div>
  );
};
