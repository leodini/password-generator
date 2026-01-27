const levels = {
  1: "weak",
  2: "medium",
  3: "strong",
};

export const checkPasswordStrength = (pwd: string) => {
  const checks = [/[a-zA-Z]/, /\d/, /[@.#$!%^&*.?]/];

  const score = checks.reduce((acc, regex) => acc + regex.test(pwd), 0);

  return levels[score as keyof typeof levels];
};
