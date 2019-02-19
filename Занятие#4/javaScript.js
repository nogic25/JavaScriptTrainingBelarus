// задача #1 Номера телефонов
var string = "rtoljyotyjutou 773-24-55 645656! 43445uikjgk 45gfgf5654 234-5678-00 4afd5tfvz";
var reg =/(\d{3})-(\d{2})-(\d{2})/g
var res= string.match(reg);
console.log(res);


// задача #1 Адреса сайтов
var string1= "hello@gmail.com my-email@gmail.com; company22@c.org; alpha@b.de"
var reg1=/[a-zA-Z][a-zA-Z0-9\.\-\_]+@[a-z][a-z0-9\-\_]*\.[a-z]{2,10}/g
var res1= string1.match(reg1);
console.log(res1);

// задача #1 Адреса зданий'
var string2= "6145 Park Street, Camden, ME, 04843, US"
var reg2=/^\d+\s[A-z]+\s[A-z]+/g
var res2= string2.match(reg2);
console.log(res2);


// задача #1 Названия HTML-тегов, использующихся в строке
var string3= "Aenean lacinia bibendum <body>life</body> sed c<a>Work</a> quis risus eget urna mollis ornare <a>about</a> leo."
var reg3=/<(.|\n)*?>/g
var res3= string3.match(reg3);
console.log(res3);

// задача #2
   function scrollDown() {
    document.getElementById('scroll').scrollTop =  document.getElementById('scroll').scrollHeight
   } 
   