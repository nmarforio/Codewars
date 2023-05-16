function reverseVowels(str) {
  const splitedStr = str.split("");
  const ArrayofVowels = ["a", "A", "o", "O", "i", "I", "u", "U", "e", "E"];
  for (let i = 0; i <= splitedStr.length; i++) {
    const a = splitedStr[i].replace(/[aeiou]/i, g);
  }
}

reverseVowels("Reverse Vowels In A String");
reverseVowels("Hello"); //"holle"
