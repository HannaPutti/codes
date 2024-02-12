console.log("hello world")
var arr=['Annie','Bennie','Jennie','Dennie'];
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
var position =arr.indexOf('Zeddy')
console.log(position)
console.log(arr.indexOf('Dennie'))

//push
const frnds=[];
frnds.push('Annie','Bennie','Jennie','Dennie');
console.log(frnds.length);
console.log(frnds);
frnds.push('Zeddie');
console.log(frnds);

//pop
console.log(frnds.pop());
console.log(arr)
arr.pop()
console.log(arr)

//Unshift function
var arr=['Annie','Bennie','Jennie','Dennie'];
console.log(arr)
arr.unshift('pug')
console.log(arr)

//shift function
var arr=['Annie','Bennie','Jennie','Dennie'];
console.log(arr)
arr.shift()
console.log(arr)

//sort () function in nodejs:
var arr=['Annie','Bennie','Jennie','Dennie'];
console.log(arr)
console.log(arr.sort())

//reverse() in node js:
var arr=['Annie','Bennie','Jennie','Dennie'];
console.log(arr)
arr.reverse()
console.log(arr)

//concat
arr=['Annie','Bennie','Jennie','Dennie'];
arr2=['keys','guitar','flute'];
console.log(arr)
console.log(arr2)
var new_arr=arr2.concat(arr2);
console.log(new_arr);



