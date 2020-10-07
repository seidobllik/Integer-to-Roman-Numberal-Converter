function convertToRoman() {
  // M: 1000
  // D:  500
  // C:  100
  // L:   50
  // X:   10
  // V:    5
  // I:    1
  //
  // Formation rule: one before, three after. 
  //        ie: III, IV, V, VI, VII, VIII, IX, X, XI, XII...
  // Break the value into orders of magnitude.
  //        ie: 2095 --> [2] [0] [9] [7] 
  //                     MM       XC  VII

  function build(num, symbols) {
    let arr = [];
    if (num <= 3) {
      arr.unshift(symbols[0].repeat(num));
    } else if (num == 4) {
      arr.unshift(symbols[0] + symbols[1]);
    } else if (num <= 8) {
      arr.unshift(symbols[1] + symbols[0].repeat(num - 5))
    } else {
      arr.unshift(symbols[0] + symbols[2]);
    }
    return arr.join('');
  }
  
  let num = parseInt(document.getElementById("number").value);
  let numArr = num.toString().split('').reverse();
  let romanArr = [];
  
  if (!Number.isInteger(num)) {
    alert("Value entered should be an integer.");
    return;
  }

  for (let i = 0; i < numArr.length; i++) {
    switch (i) {
      case 0: // ones
        romanArr.unshift(build(numArr[i], ["I", "V", "X"]));
        break;
      case 1: // tens
        romanArr.unshift(build(numArr[i], ["X", "L", "C"]));
        break;
      case 2: // hundreds
        romanArr.unshift(build(numArr[i], ["C", "D", "M"]));
        break;
      default: // thousands or more
        romanArr.unshift("M".repeat(Math.floor(num / 1000)))
        i = numArr.length;
        break;
    }
  }
  document.getElementById("roman").innerHTML = romanArr.join("");
}