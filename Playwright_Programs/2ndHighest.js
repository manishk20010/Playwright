
let num = [1, 3, 2]

let highest = -Infinity
let secondHighest = -Infinity

for (let i = 0; i < num.length; i++) {

  if (num[i] > highest) {

    secondHighest = highest;
    highest = num[i];
    //console.log(secondHighest)
  }
  else if (num[i] > secondHighest && num[i] !== highest) {
    secondHighest = num[i];

  }
}
console.log(secondHighest)