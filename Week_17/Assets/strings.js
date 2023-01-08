let users="Petya, Masha, Olya";
let userslist=`Petya,
               Masha,
               Olya`;
console.log (users);
console.log (userslist);
console.log(users.length);
console.log(userslist.length);

let test= "We are \"Google\"";
console.log(test);
let position =test.indexOf("Google");
console.log(position);
let position1 =test.indexOf("Apple");
console.log(position1);

let sliced = test.slice(position);
console.log(sliced);

let sliced1 =test.slice(position, -1);
console.log(sliced1);

test.replace("Google", "Apple");
console.log(test);

let apple = test.replace("Google", "Apple");
console.log(apple);

let apple1 = test.replace("google", "Apple");
console.log(apple1);

let apple2 = test.replace(/google/i, "Apple");
console.log(apple2);

let message = "Hi, username";
let name1 = "Veronika";

let result = message.replace("username", name1);
console.log(result);


let big = name1.toUpperCase();
console.log(big);

let small = name1.toLowerCase();
console.log(small);

let username = "veronika";
/*if (name1() == username()) {
   console.log(true);
}*/

if (name1.toLowerCase() == username.toLowerCase()) {
    console.log(true);
}

console.log(name1[0]);
console.log(name1[name1.length-1]);

let txt = "Moscow, Berlin, Kaiserslautern";
let cities = txt.split(",");
console.log(cities);

console.log(cities.join(";"));

let str = "        two";
let clean = str.trim(str);
console.log(clean);
