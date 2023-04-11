// Katas 7
const vowels = "aeiou";

function disemvowel(str) {
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("");
}

function solution(str) {
  let newStrArray = [str];
  if (str.length % 2 === 1) {
    newStrArray.push("_");
  } else if (str.length === 0) {
    return [];
  }
  const matchStr = newStrArray.join("");
  const endArraymatches = matchStr.match(/\w{1,2}/g);
  return endArraymatches;
}
