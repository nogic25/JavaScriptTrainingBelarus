// задача #2
// не поняла как отсортировать его по убыванию остатков от деления на 10.
var s= parseInt(prompt("Введите первое значение: "));
var p= parseInt(prompt("Введите второе значение: "));

function getRandomInt(min, max) {
   var arr=[];
   while (arr.length<1000){
   min = Math.ceil(min);
   max = Math.floor(max);
   arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
}
/*arr.forEach( function(v, i, arr) { 
   arr[i] = v%10;
});
*/
return arr.sort((a, b)=> b - a);;
}
console.log(getRandomInt(s,p));



// задача #4
let person=[];
let firstName= ["Alex","Bob","Lisa","Slava"];


while (person.length<100){
   var nameF= firstName[Math.floor(Math.random() * firstName.length)]
person.push({
   name: nameF,
   age: Math.floor(Math.random() * (80- 17 + 1)) + 17,
   print: function() { console.log(this.name+ " " + this.age) }
}
)
}
for (i=0;i<person.length;i++){
person[i].print();
}

