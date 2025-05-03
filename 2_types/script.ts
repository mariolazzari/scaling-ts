import {
  City,
  CityName,
  CityWithNickname,
  CityWithoutCountry,
  PartialCity,
  ReadonlyCity,
  RequiredCity,
} from "./City";

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

const cityName: CityName = {
  name: "Riva del Garda",
};
console.log(cityName);

const cityWithoutCountry: CityWithoutCountry = {
  name: "Riva del Garda",
};
console.log(cityWithoutCountry);
