export const DEFAULT_VALUES = {
  passwordLength: 10,
  passwordWeights: { letter: 0.5, number: 0.25, specialChar: 0.25 },
  form: {
    random: {
      length: 20,
      hasLetters: true,
      hasNumbers: true,
      hasSymbols: false,
    },
    pin: {
      length: 6,
      hasLetters: false,
      hasSymbols: false,
      hasNumbers: true,
    },
  },
};
