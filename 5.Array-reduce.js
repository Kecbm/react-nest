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

/* Alterando a estrutura do array original */
// const breedNormalized = dogBreeds.reduce((acc, dog) => {
//     return {
//         ...acc,
//         [dog.breed]: {
//             ...dog
//         }
//     }
// }, {});

// console.log("breedNormalized: ", breedNormalized);

// ESTOU EM: seção 2 - aula 9 - 6:20 min