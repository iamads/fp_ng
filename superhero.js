const superheroes = [
    { name: "Superman", gender: "m", power: 90, universe: "DC" },
    { name: "Wonder Woman", gender: "f", power: 80, universe: "DC" },
    { name: "Batman", gender: "m", power: 30, universe: "DC" },
    { name: "Flash", gender: "m", power: 60, universe: "DC" },
    { name: "Starfire", gender: "f", power: 80, universe: "DC" },
    { name: "Iron Man", gender: "m", power: 60, universe: "MARVEL" },
    { name: "Black Widow", gender: "f", power: 30, universe: "MARVEL" },
    { name: "Hulk", gender: "m", power: 120, universe: "MARVEL" },
    { name: "Thor", gender: "m", power: 80, universe: "MARVEL" },
    { name: "Spiderman", gender: "m", power: 50, universe: "MARVEL" },
];

// I want names of all the superheroes
// console.log(superheroes.map((hero) => hero.name));

// I want name of all marvel superheroes
// console.log(superheroes.filter((hero => hero.universe === "MARVEL")).map((hero) => hero.name));

// I want name of all female superheroes


// I want total power of all dc superheroes