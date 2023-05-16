// Challenge for a Job at Wallaince

function loop10Times(min, max) {
  let timesArray = [];
  for (let i = 0; i < 10; i++) {
    const time = Math.random() * (max - min) + min;
    timesArray.push(time);
  }
  return timesArray;
}

async function time() {
  const allTimes = await loop10Times(0, 2);
  const initialValue = 0;
  const sum = allTimes.reduce((a, b) => a + b, initialValue);
  return sum;
}

time();
//
