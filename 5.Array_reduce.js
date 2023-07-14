const dogBreeds = [
    {
      breed: "Pinscher",
      size: "Pequeno",
      origin: "Alemanha",
      emoji: "🐶",
      age: 3
    },
    {
      breed: "Pitbull",
      size: "Médio a Grande",
      origin: "Estados Unidos",
      emoji: "🐶",
      age: 5
    },
    {
      breed: "Dálmata",
      size: "Médio",
      origin: "Croácia",
      emoji: "🐶",
      age: 2
    },
    {
      breed: "Lulu da Pomerânia",
      size: "Pequeno",
      origin: "Alemanha",
      emoji: "🐶",
      age: 4
    },
    {
      breed: "Poodle",
      size: "Variado (Miniatura, Médio, Padrão)",
      origin: "Alemanha",
      emoji: "🐩",
      age: 6
    }
];

/* Convertendo um array para um objeto */
const breedObj = dogBreeds.reduce((acc, dog) => {
    return {
        ...acc,
        [dog.breed]: {
            ...dog
        }
    }
}, {});

console.log("breedObj: ", breedObj);

/* Acessando a idade do Pinscher */
console.log("Pinscher age: ", breedObj.Pinscher.age);

/* Montando um array que armazena uma string específica para cada dog */
const dogInfos = dogBreeds.reduce((acc, dog) => {
  acc.push(`${dog.breed} - ${dog.origin}`)

  return acc;
}, []);

console.log("dogInfos: ", dogInfos);