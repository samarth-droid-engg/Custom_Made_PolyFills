//ForEach is a type of loop which just iterates the array
//It doesn't return anything just iterates

//First Check Condition:
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (value) {
    //value is a callback function
    for (let i = 0; i < this.length; i++) {
      value(this[i], i, this); //forEach mein hum (element, index, array) pass krte hain
    }
  };
}

const arr = [1, 2, 3, 4, 5];
arr.myForEach((e, idx) => console.log(idx, ":", e));