import { Country, printCity } from "./City";
import { Civilization } from "./Civilization";
import { Architect, General, Pharaoh, Philosopher, Poet } from "./Person";
import { Tree, TreeDetails } from "./Tree";

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

const oakData: Tree = {
  name: "Oak",
  height: 20,
  age: 100,
};

const oak: TreeDetails<Tree> = {
  getName: () => oakData.name,
  getHeight: () => oakData.height,
  getAge: () => oakData.age,
};

console.log(`Name: ${oak.getName()}`);
console.log(`Height: ${oak.getHeight()}`);
console.log(`Age: ${oak.getAge()}`);
