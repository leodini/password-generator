import React from "react";
import { generatePassword } from "@/lib/generate-password";
import { atom, useAtom } from "jotai";
import { useMemo } from "react";
import { valuesAtom } from "./form";

const getValuesAtom = atom((get) => get(valuesAtom));

export const PasswordWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [values] = useAtom(getValuesAtom);
  const memoizedPassword = useMemo(
    () =>
      generatePassword(
        values.charsLength,
        values.letters,
        values.numbers,
        values.symbols,
      ),
    [values],
  );

  const childrenWithProps = React.Children.map(
    children as unknown as never,
    (child: React.ReactElement<{ password: string }>) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { password: memoizedPassword });
      }
    },
  );

  return <>{childrenWithProps}</>;
};
