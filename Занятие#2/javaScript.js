// задача #2
// не поняла как показать диапозон s ± p%
/*var arr = [];
for (var i=0, t=1000; i<t; i++) {
   arr.push(Math.round(Math.random()*t));
   result= arr.filter(function(elem){
      return ( elem %10==0);
   })
   result.sort((a, b) => b - a);;
}
console.log(result);
*/
// Создать массив из списка имен. Сгенерировать массив из 100 объектов типа «Человек». 
//У каждого объекта должно быть случайным образом выбрано имя, возраст, а также метод,
// который выводит имя и возраст данного человека. Прогнать методом обхода по этому массиву и заставить каждого человека представиться.


var person = {
  name: function scanNames (){
  let firstName= ["Alex","Bob","Lisa","Slava"];
  firstName.forEach(function(elem){
  return elem;
  })
  }
  };
  let people = new Array(101).fill().map((e, i) => {
     return {
          age: Math.round(Math.random()*i),
          names: this.name
  
     }
  });
  console.log (people);