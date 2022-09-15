function CapitalizeText(string) {
  if (typeof string !== "string") return new Error("String was expected");

  const newString = string.split(" ");
  for (const [index, word] of newString.entries())
    newString[index] = word.charAt(0).toUpperCase() + word.slice(1);

  return newString.join(" ");
}

export { CapitalizeText as CapText };
