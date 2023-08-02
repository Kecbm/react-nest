const musicalInstruments = [
    {
      name: "Violão",
      emoji: "🎸",
      inventor: "Antonio de Torres",
    },
    {
      name: "Piano",
      emoji: "🎹",
      inventor: "Bartolomeo Cristofori",
    },
    {
      name: "Bateria",
      emoji: "🥁",
      inventor: "William Ludwig",
    },
    {
      name: "Guitarra",
      emoji: "🎶",
      inventor: "Adolph Rickenbacker",
    },
    {
      name: "Baixo",
      emoji: "🎸",
      inventor: "Leo Fender",
    },
    {
      name: "Saxofone",
      emoji: "🎷",
      inventor: "Adolphe Sax",
    },
    {
      name: "Violino",
      emoji: "🎻",
      inventor: "Andrea Amati",
    },
    {
      name: "Trompete",
      emoji: "🎺",
      inventor: "Antoine Courtois",
    },
    {
      name: "Flauta",
      emoji: "🎵",
      inventor: "Theobald Boehm",
    }
];

/* Buscando o saxofone */
const searchSax = musicalInstruments.find((instrument) => instrument.name === "Saxofone");

console.log("searchSax: ", searchSax);

/* Buscando o instrumento de acordo com o nome do inventor */
const searchInventor = (instrument) => {
  return instrument.inventor === "Antonio de Torres";
}

const inventor = musicalInstruments.find(searchInventor);

console.log("inventor: ", inventor);

/* Buscando um instrumento pelo emoji */
const searchInstrumentByEmoji = (instrument) => {
  return instrument.emoji === "🥁";
}

const searchBaterry = musicalInstruments.find(searchInstrumentByEmoji);

console.log("searchBaterry: ", searchBaterry);