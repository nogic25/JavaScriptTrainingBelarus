// задача #2

var firstString = prompt("Введите первое значение: ");
var secondString = prompt("Введите второе значение: ");

function compare (a, b){
var c=a.split ("").sort().join("");
    d=b.split ("").sort().join("");
  alert(c===d ? a + " and " + b + " are anagrams!":
               a + " and " + b + " are not anagrams.");

}

compare ( firstString, secondString);

// задача #6

var firstString = (prompt("Введите первое значение: "));

function divisionThree (str){
   var element = str.split("");
   var sum= 0;
   var count=0;
for(var i = 0; i < element.length; i++) {
      if (element[i] % 3 ==0){
        sum=sum + parseInt(element[i]);
        count ++;
      }
   }
   console.log(" Sum: " + sum + " and Count: " + count)
}

divisionThree(firstString);
