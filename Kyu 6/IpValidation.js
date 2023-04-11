//Not working complitely, i still have to find a way for the last value != to number
//https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

function isValidIP(str) {
  const ipBlock = str.split(".");
  console.log(ipBlock);
  const numbers = [...Array(256).keys()];
  for (const [i, value] of ipBlock.entries()) {
    numbers.forEach((number) => {
      if (
        ipBlock.length > [3] &&
        value >= 0 &&
        value <= 255 &&
        value != `0${number}`
      ) {
        console.log(number);
        return true;
      } else {
        return false;
      }
    });
  }
}

isValidIP("0.0.0.0");
isValidIP("12.34.56");
isValidIP("01.02.03.04");
