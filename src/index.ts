export default function SpongeBobCase(input: String): String {
  let shouldCapitalize = false;

  return [...input]
    .map((character) => {
      const upperCase = character.toUpperCase();
      // if the item is a punctuation mark, space, emoji, etc, just return it
      if (upperCase === character && !character.match(/[A-Z]/)) {
        // the first letter in the next sentence should be lower case
        shouldCapitalize = false;
        return character;
      }

      shouldCapitalize = !shouldCapitalize;
      // since we are flipping the flag above, we want the opposite condition to return true
      return !shouldCapitalize ? upperCase : character.toLowerCase();
    })
    .join("");
}
