//Hey Everyone
//In these code files, I have made my own polyfills.
//FYI: A polyfill is code you write to add a modern feature to older browsers/environments that don't support it natively
//It is also used to create our own feature which we can implement in our codefiles.
//And Believe me this only lower down your workload



//BoilerPlate:
//Must check code:

// if(!feature_Exist){
//     //add the feature yourself
// }

//for Example:
if(!Array.prototype.includes){ //Checking for if the property doesn't supported in the browser
    Array.prototype.includes = function(value){
        return this.indexOf(value) !== -1; //Made it happen
    }
}

const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(2));
const arr2 = arr.map(e=>e*2);
console.log(arr2);