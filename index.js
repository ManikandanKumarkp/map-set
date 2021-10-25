// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


//map
//helper method :set,get,has,delete ,size
// let mymap = new Map();
// mymap.set('mani',{1:2,3:4})
// console.log(mymap.get('mani'))


let nme=new Map();
nme.set('x',[{mani:'sasi',age:23,car:'fix'},{mani:'sasi',age:23,car:'fix'},{mani:'sasi',age:23,car:'fix'},{mani:'sasi',age:23,car:'fix'}])
console.log(nme.has('x'))
console.log(nme.delete('x'))

console.log(nme.has('x'))
console.log(nme.get('x'))


let myob=new Map();
myob.set('x',[{mani:'sasi',age:23,car:'fix'},{mani:'sasi',age:23,car:'fix'},{mani:'sasi',age:23,car:'fix'},{mani:'sasi',age:23,car:'fix'}])
console.log(myob.get('x'))

let mob=new Map();
mob.set('man',[1,2,23,45],[2,4,6,8])
console.log(mob.size)


//set  helper method add,delete,has,size
let myset = new Set();
myset.add(19)
console.log(myset)





