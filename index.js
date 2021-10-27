var a = 1;
var b = 2;
function add(a, b) {
  return a + b;
}
add(a, b);

var cars = ["Honda", "Nissan", "Toyota"];
cars.push("VW")
// cars.pop()
var nums = [1,2,3,4,5]
function findIndex(arr, value){
    let indexToFind
    for (let index = 0; index < arr.length; index++) {
       if(arr[index] === value){
        indexToFind = index
        break
       }
        
    }
    return indexToFind
}
cars.slice(1, 2)
console.log(cars);
console.log(findIndex(cars, "Nissan"));
console.log(findIndex(nums, 4));
console.log(cars.slice(1, 3));
