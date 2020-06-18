

let numeros = [1,2,3,4,4,4,4,5,4,2,3,4,23,2,5,2,5,4,3,4,,7,8,89,12,3,4];

let lessThanFive = numeros.filter((numero)=> numero < 5);

// console.log(lessThanFive);


let names = ["Carlos", "Juan", "Pedro", "Cesar", "María", "Jessica", "Perla", "Fernando"];

let morethanSixChars = names.filter((name) => name.length > 6);

// console.log(morethanSixChars);

let people = [
    {name: "Pedro", profession: "Programmer", location: "Monterrey"},
    {name: "Martina", profession: "Astronaut", location: "Cd. Victoria"},
    {name: "Carlos", profession: "UX Designer", location: "Zapopan"},
    {name: "Carolina", profession: "Lawyer",location: "Los Angeles"},
    {name: "Raul", profession: "Youtuber",location: "Los Angeles"},
    {name: "La Parka", profession: "Wrestler", location: "Ciudad de México"}
]

let peopleLocations = people.filter(( (item) =>{ 
    return item.location == "Los Angeles"  
}));

console.log("", Locations)