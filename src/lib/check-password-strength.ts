const levels = {
  1: "weak",
  2: "medium",
  3: "strong",
  4: "very-strong",
};

export const checkPasswordStrength = (pwd: string) => {
  const checks = [/[a-zA-Z]/, /\d/, /[@.#$!%^&*.?]/, /^.{8,}$/];

  const score = checks.reduce((acc, regex) => acc + regex.test(pwd), 0);

  return levels[score as keyof typeof levels];
};
