import {
  City,
  CityName,
  CityProps,
  CityWithName,
  CityWithNickname,
  CityWithoutCountry,
  PartialCity,
  ReadonlyCity,
  RequiredCity,
} from "./City";
import { Language } from "./Language";

const city: City = {
  name: "Vienna",
  country: "Austria",
};
console.log(city);

const nickCity: CityWithNickname = {
  name: "Venice",
  country: "Italy",
  nickname: "The Floating City",
};
console.log(nickCity);

const partialCity: PartialCity = {
  name: "Florence",
};
console.log(partialCity);

const reqCity: RequiredCity = {
  name: "Florence",
  country: "Italy",
};
console.log(reqCity);

const roCity: ReadonlyCity = {
  name: "Florence",
  country: "Italy",
};
// roCity.name = "Rome"; // Error: Cannot assign to 'name' because it is a read-only property
console.log(roCity);

const cityName: CityWithName = {
  name: "Riva del Garda",
};
console.log(cityName);

const cityWithoutCountry: CityWithoutCountry = {
  name: "Riva del Garda",
};
console.log(cityWithoutCountry);

let Langiage: Language = null;
console.log(Langiage);
Langiage = "English";
console.log(Langiage);

let cityName2: CityName = "Rome";
console.log(cityName2);
cityName2 = "Vienna";
// cityName2 = "Madrid"; // Error: Type '"Madrid"' is not assignable to type 'CityName'.

function welcomeCity(city: CityName): string {
  return `Welcome to ${city}`;
}
console.log(welcomeCity("Rome"));

const cityProps: CityProps[] = ["name", "country"];
console.log(cityProps);
// cityProps.push("nickname"); // Error: Argument of type '"nickname"' is not assignable to parameter of type 'CityProps'.
