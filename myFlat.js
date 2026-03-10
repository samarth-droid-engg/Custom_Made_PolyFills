//const arr = [1, [2, [3, [4,[5]]]]];

// const arr1 = arr.flat(Infinity);
// console.log(arr1);

// Iska output: //[1, 2, 3, 4, 5]

if (!Array.prototype.myFlat) {
  Array.prototype.myFlat = function (value=1) {
    let out = [];

    function myFlatty(value, arr) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && value > 0) myFlatty(value - 1, arr[i]);
        else out.push(arr[i]);
      }
    }
    myFlatty(value, this);
    return out;
  };
}

const arr = [1, [2, [3, [4, [5]]]]];
const res = arr.myFlat();
console.log(res);
