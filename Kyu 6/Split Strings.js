// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

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
