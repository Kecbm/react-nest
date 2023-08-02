const fresnoSongs = [
  {
    title: 'Eu Sei',
    musicians: ['Lucas Silveira', 'Vavo', 'Rodrigo Tavares'],
    emoji: '😎',
    streams: 10000000,
  },
  {
    title: 'Alguém que te faz sorrir',
    musicians: ['Lucas Silveira', 'Vavo', 'Rodrigo Tavares'],
    emoji: '😁',
    streams: 9500000,
  },
  {
    title: 'Infância',
    musicians: ['Lucas Silveira', 'Vavo', 'Rodrigo Tavares'],
    emoji: '👶',
    streams: 9000000,
  },
  {
    title: 'Stonehenge',
    musicians: ['Lucas Silveira', 'Vavo', 'Rodrigo Tavares'],
    emoji: '🪨',
    streams: 8500000,
  },
  {
    title: 'Desde Quando Você Se Foi',
    musicians: ['Lucas Silveira', 'Vavo', 'Rodrigo Tavares'],
    emoji: '🛣️',
    streams: 8000000,
  },
  {
    title: 'Quebre As Correntes',
    musicians: ['Lucas Silveira', 'Vavo', 'Rodrigo Tavares'],
    emoji: '⛓️',
    streams: 7500000,
  },
  {
    title: 'Die Lüge',
    musicians: ['Lucas Silveira', 'Vavo', 'Rodrigo Tavares'],
    emoji: '🎭',
    streams: 7200000,
  },
  {
    title: 'Onde Está',
    musicians: ['Lucas Silveira', 'Vavo', 'Rodrigo Tavares'],
    emoji: '💔',
    streams: 7000000,
  },
  {
    title: 'Manifesto',
    musicians: ['Lucas Silveira', 'Vavo', 'Rodrigo Tavares'],
    emoji: '📖',
    streams: 6800000,
  },
  {
    title: 'Sexto Andar',
    musicians: ['Lucas Silveira', 'Vavo', 'Rodrigo Tavares'],
    emoji: '🏢',
    streams: 6500000,
  },
];

/* Exebindo um array do array de músicos */
const fresnoBand = fresnoSongs.map((song) => song.musicians);

console.log("fresnoBand: ", fresnoBand);

/* Exebindo o array de musicos como uma string em um novo array */
const nameFresnoMusicians = fresnoSongs.flatMap((song) => song.musicians);

console.log("nameFresnoMusicians: ", nameFresnoMusicians);