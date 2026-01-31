import React from "react";
import { generatePassword } from "@/lib/generate-password";
import { atom, useAtom } from "jotai";
import { useMemo } from "react";
import { refreshAtom, valuesAtom } from "./form";

const getValuesAtom = atom((get) => get(valuesAtom));
const getRefreshAtom = atom(
  (get) => get(refreshAtom),
  (_get, set, newValue: boolean) => set(refreshAtom, newValue),
);

export const PasswordWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [values] = useAtom(getValuesAtom);
  const [refresh, setRefresh] = useAtom(refreshAtom);
  const memoizedPassword = useMemo(() => {
    setRefresh(false);
    return generatePassword(
      values.charsLength,
      values.letters,
      values.numbers,
      values.symbols,
    );
  }, [values, refresh]);

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
