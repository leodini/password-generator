export const scrambleString = (str: string) => {
  let result: string[] = [];
  let i = 0;

  while (i < str.length) {
    let char = str.slice(i, i + 1);
    let random = Math.floor(Math.random() * result.length - 1);
    result.splice(random, 0, char);

    i++;
  }

  return result.join("");
};
