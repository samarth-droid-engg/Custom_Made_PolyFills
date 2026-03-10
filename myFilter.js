//In this, I have made my own filter
//Basic work of filter is just to just iterate the array and return a new Array according to the condition

//First Check Condition:
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (value) {
    //value is a callback function
    let result = [];

    for (let i = 0; i < this.length; i++) {
      result.push(value(this[i], i, this)); //filter mein hum (element, index, array) pass krte hain
    }

    return result;
  };
}

const arr = [1, 2, 3, 4, 5];
const res = arr.myFilter((e, idx) => e && !(idx&1));
console.log(res);