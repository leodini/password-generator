import { PASSWORD_CHARACTERS } from "@/constants/password-chars";
import {
  hasLetterRegex,
  hasNumberRegex,
  hasSpecialRegex,
} from "./password-regex";
import { weightedRandomNumber } from "./weighted-random-number";
import { DEFAULT_VALUES } from "@/constants/default-values";
import { scrambleString } from "./scramble-string";

export const generatePassword = (
  length: number,
  hasLetters: boolean,
  hasNumbers: boolean,
  hasSpecialChars: boolean,
): string => {
  let newPassword = "";

  while (newPassword.length < length) {
    let chosenLetter = "";
    if (hasLetters && !hasLetterRegex.test(newPassword)) {
      chosenLetter =
        PASSWORD_CHARACTERS.letters[
          Math.floor(Math.random() * PASSWORD_CHARACTERS.letters.length)
        ];
      newPassword += chosenLetter;
      continue;
    }
    if (hasNumbers && !hasNumberRegex.test(newPassword)) {
      chosenLetter =
        PASSWORD_CHARACTERS.numbers[
          Math.floor(Math.random() * PASSWORD_CHARACTERS.numbers.length)
        ];
      newPassword += chosenLetter;

      continue;
    }
    if (hasSpecialChars && !hasSpecialRegex.test(newPassword)) {
      chosenLetter =
        PASSWORD_CHARACTERS.special[
          Math.floor(Math.random() * PASSWORD_CHARACTERS.special.length)
        ];

      newPassword += chosenLetter;
      continue;
    }

    const chosenCategory = weightedRandomNumber(
      Object.values(PASSWORD_CHARACTERS),
      [
        hasLetters ? DEFAULT_VALUES.passwordWeights.letter : 0,
        hasNumbers ? DEFAULT_VALUES.passwordWeights.number : 0,
        hasSpecialChars ? DEFAULT_VALUES.passwordWeights.specialChar : 0,
      ],
    );

    chosenLetter =
      chosenCategory[Math.floor(Math.random() * chosenCategory.length)];

    newPassword += chosenLetter;
  }

  return scrambleString(newPassword);
};
