let now = new Date();
console.log(now);

let timestamp = new Date(24*3600*1000);
console.log(timestamp);

let date = new Date("2023-01-08");
console.log(date);

let num = new Date(2023, 0, 8);
console.log(num);
console.log(num.getDate());
console.log(num.getMonth() +1);
console.log(num.getFullYear());
console.log(`${num.getDate()}.${num.getMonth() +1}.${num.getFullYear()}`);

num.setFullYear(2022);
console.log(num);

let options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC'
};
console.log(new Date().toLocaleString("de", options));

console.log(num);

let diff = Date.now() - date;
console.log(diff / 1000 / 3600);
