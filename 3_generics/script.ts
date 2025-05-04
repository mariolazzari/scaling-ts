import { Country, printCity } from "./City";
import { Civilization } from "./Civilization";
import { Architect, General, Pharaoh, Philosopher, Poet } from "./Person";

printCity<string>("New York");
printCity<number>(123);
printCity<boolean>(true);

const country: Country<string> = {
  name: "USA",
  capital: "Washington, D.C.",
};

printCity<Country<string>>(country);

const egyptianCivilization: Civilization<Pharaoh | Architect> = {
  name: "Egyptian",
  location: "Africa",
  notablePeople: [
    {
      name: "Cleopatra",
      occupation: "Pharaoh",
    },
    {
      name: "Imhotep",
      occupation: "Architect",
    },
  ],
};

const greekCivilization: Civilization<Philosopher | Poet> = {
  name: "Greek",
  location: "Europe",
  notablePeople: [
    {
      name: "Homer",
      occupation: "Poet",
    },
    {
      name: "Socrates",
      occupation: "Philosopher",
    },
  ],
};

const romanCivilization: Civilization<General | Poet> = {
  name: "Roman",
  location: "Europe",
  notablePeople: [
    {
      name: "Julius Caesar",
      occupation: "General",
    },
    {
      name: "Virgil",
      occupation: "Poet",
    },
  ],
};
