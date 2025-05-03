import { Country, printCity } from "./City";

printCity<string>("New York");
printCity<number>(123);
printCity<boolean>(true);

const country: Country<string> = {
  name: "USA",
  capital: "Washington, D.C.",
};

printCity<Country<string>>(country);
