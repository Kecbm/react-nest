const bobEsponjaCharacters = [
    {
      name: "Bob Esponja",
      occupation: "Cozinheiro de Hamburguer de Siri",
      emoji: "😃",
    },
    {
      name: "Patrick Estrela",
      occupation: "Desempregado",
      emoji: "🌟",
    },
    {
      name: "Lula Molusco",
      occupation: "Caixa",
      emoji: "😒",
    },
    {
      name: "Sandy Cheeks",
      occupation: "Cientista",
      emoji: "🐿️",
    },
    {
      name: "Sr. Siriguejo",
      occupation: "Dono do Siri Cascudo",
      emoji: "💰",
    },
    {
      name: "Plankton",
      occupation: "Dono do Balde de Lixo",
      emoji: "🦠",
    }
];

/* Verificando se algum personagem que tem a ocupação de cientista */
const occScience = bobEsponjaCharacters.some((character) => character.occupation === "Cientista");

console.log("occScience: ", occScience);

/* Verificando se algum personagem tem o emoji: 🤪 */
const characterEmoji = bobEsponjaCharacters.some((character) => character.emoji === "🤪");

console.log("characterEmoji: ", characterEmoji);

/* Verificando se todos os personagens possuem o nome "Siri" em sua ocupação */
const occSiri = bobEsponjaCharacters.every((character) => character.occupation.includes("Siri"));

console.log("occSiri: ", occSiri);