import { City, outputLocation } from "./City";
import { ICapitalCity, ICity } from "./ICity";

const ny = new City("New York", "USA");
console.log(ny.getCityInfo()); // Output: New York, USA

const london: ICity = {
  name: "London",
  country: "UK",
};
console.log(london);

const tokyo: ICapitalCity = {
  name: "Tokyo",
  country: "Japan",
  capitalBuilding: "Tokyo Tower",
  landmarks: ["Shibuya Crossing", "Senso-ji Temple"],
  population: 13929286,
};
console.log(tokyo);

outputLocation(ny); // Output: New York, USA
