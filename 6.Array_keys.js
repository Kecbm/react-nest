const calcinhaPretaMusics = [
    {
      name: "Você Não Vale Nada",
      emoji: "💩",
      releaseYear: 2003,
      streams: 10000000
    },
    {
      name: "Amor Dividido",
      emoji: "🐮",
      releaseYear: 2005,
      streams: 8500000
    },
    {
      name: "Louca Por Ti",
      emoji: "❤️‍🔥",
      releaseYear: 2009,
      streams: 12000000
    },
    {
      name: "Hoje à Noite",
      emoji: "🌃",
      releaseYear: 2010,
      streams: 9000000
    },
    {
      name: "Ainda Te Amo",
      emoji: "🫀",
      releaseYear: 2015,
      streams: 7500000
    }
];

/* Convertendo o array para um objeto */
const objMusics = calcinhaPretaMusics.reduce((acc, music) => {
    return {
        ...acc,
        [music.name]: {
            ...music
        }
    }
}, {});

console.log("objMusics: ", objMusics);

/* Acessando as chaves os objetos */
const keysMusics = Object.keys(objMusics);

console.log("keysMusics: ", keysMusics);

/* Transformando as chaves de um objeto em keys */
const keysOfObj = Object.keys(calcinhaPretaMusics[2]);

console.log("keysOfObj: ", keysOfObj);

/* Montando os objetos originais novamente */
const objBackup = keysMusics.map((key) => (
    {
        name: key,
        emoji: objMusics[key].emoji,
        releaseYear: objMusics[key].releaseYear,
        streams: objMusics[key].streams
    }
));

console.log("objBackup: ", objBackup);