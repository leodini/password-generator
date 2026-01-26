const levels = {
  1: "very weak",
  2: "weak",
  3: "medium",
  4: "strong",
};

export const checkPasswordStrength = (pwd: string) => {
  const checks = [
    /[a-z]/, // Lowercase
    /[A-Z]/, // Uppercase
    /\d/, // Digit
    /[@.#$!%^&*.?]/, // Special character
  ];

  const score = checks.reduce((acc, regex) => acc + regex.test(pwd), 0);

  return levels[score as keyof typeof levels];
};
