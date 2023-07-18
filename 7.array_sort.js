const greatestVictoriesHamilton = [
    {
      year: 2008,
      location: "Silverstone, United Kingdom",
      carType: "McLaren MP4-23",
      team: "McLaren",
      emoji: "🇬🇧"
    },
    {
      year: 2012,
      location: "Austin, United States",
      carType: "McLaren MP4-27",
      team: "McLaren",
      emoji: "🇺🇸"
    },
    {
      year: 2017,
      location: "Montreal, Canada",
      carType: "Mercedes F1 W08 EQ Power+",
      team: "Mercedes",
      emoji: "🇨🇦"
    },
    {
      year: 2019,
      location: "Suzuka, Japan",
      carType: "Mercedes F1 W10 EQ Power+",
      team: "Mercedes",
      emoji: "🇯🇵"
    },
    {
      year: 2020,
      location: "Portimão, Portugal",
      carType: "Mercedes F1 W11 EQ Performance",
      team: "Mercedes",
      emoji: "🇵🇹"
    }
];

/* Ordenando os objetos pelo ano, de forma decrescente */
const yearDesc = greatestVictoriesHamilton.sort((a, b) => {
  if (a.year > b.year) {
    return -1;
  }
});

console.log("yearDesc: ", yearDesc);

/* Ordenando pelo nome dos paises, em ordem alfabética */
const locationAsc = greatestVictoriesHamilton.sort((a, b) => {
  if (a.location.toLocaleLowerCase() < b.location.toLocaleLowerCase()) {
    return -1;
  }
});

console.log("locationAsc: ", locationAsc);