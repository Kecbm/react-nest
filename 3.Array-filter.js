const superheroes = [
    {
      name: "Homem de Ferro",
      emoji: "🦾",
      power: "Tecnologia avançada, inteligência"
    },
    {
      name: "Thor",
      emoji: "⚡️",
      power: "Poderes baseados na mitologia nórdica, martelo mágico"
    },
    {
      name: "Hulk",
      emoji: "💪",
      power: "Força e resistência sobre-humanas"
    },
    {
      name: "Mulher Maravilha",
      emoji: "👸🏻",
      power: "Força, velocidade, habilidades de combate"
    },
    {
      name: "Deadpool",
      emoji: "🔫",
      power: "Regeneração acelerada, habilidades de combate, quebra da quarta parede"
    },
    {
      name: "Batman",
      emoji: "🦇",
      power: "Inteligência, habilidades de combate, tecnologia"
    },
    {
      name: "Homem-Aranha",
      emoji: "🕷️",
      power: "Força, agilidade, habilidades de escalar paredes"
    },
];

/* Imprimindo o conteúdo do array */
console.log("superheroes: ", superheroes);

/* Filtrando os super heróis que tem a habilidade de combate */
const combatPower = superheroes.filter((hero) => hero.power.includes("combate"));

console.log("combatPower: ", combatPower);

/* Filtrando os super heróis que tem a habilidade de força */
const forcePower = superheroes.filter((hero) => hero.power.includes("Força"));

console.log("powerForce: ", forcePower);

/* Exibindo somente o herói que tem o poder de tecnologia avançada */
const filterTech = (hero) => hero.power.includes("Tecnologia avançada");

const techPower = superheroes.filter(filterTech);

console.log("techPower: ", techPower);

/* Exebindo somente a Mulher Maravilha */
const searchWonderWoman = (hero) => hero.name === "Mulher Maravilha";

const filterWoman = superheroes.filter(searchWonderWoman);

console.log("filterWoman: ", filterWoman);