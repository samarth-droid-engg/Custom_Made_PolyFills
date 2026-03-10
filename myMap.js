//In this I have made my own map (Array Method)
//In JS, map returns a new array with the updated values

Array.prototype.myMap = function (value) {
  //value is a callback function
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(value(this[i], i, this)); //Map mein hum (element, index, array) pass krte hain
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];
const res = arr.myMap((e, idx) => e * 2 - idx);
console.log(res);
