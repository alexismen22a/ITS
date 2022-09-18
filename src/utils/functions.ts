function CapitalizeText(string: string): string {
  if (typeof string !== 'string') throw new Error('String was expected');

  const newString: Array<string> = string.split(' ');

  newString.forEach((word, index) => {
    newString[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return newString.join(' ');
}

export { CapitalizeText as CapText };
