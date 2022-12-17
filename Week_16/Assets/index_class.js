//Arrays

let names = ["Masha", "Sasha", "Zhenya"];
//let names = new Array("Masha", "Sasha", "Zhenya");
for(let i=0; i<names.length; i++)
{
    console.log(i);
    console.log(names[i]);
}

for(let name of names)
{
    console.log(name);
}

names.forEach(function(name, index) {
    console.log(index);
    console.log(name);
});

//querySelector
//let elements = document.getElementsByClassName("item");
//console.log(elements);

for(let element of elements) {
    console.log(element.textContent);
}

let elements = document.querySelectorAll(".item");
console.log(elements);