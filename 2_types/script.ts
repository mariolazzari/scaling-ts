const city1 = {
  name: "Insbruck",
  country: "Austria",
};

type CityWithInfo = typeof city1;

const city2: CityWithInfo = {
  name: "Vienna",
  country: "Austria",
};

type CityWithNickname = typeof city2 & {
  nickname: string;
};

const venice: CityWithNickname = {
  name: "Venice",
  country: "Italy",
  nickname: "The Floating City",
};

type PartialCity = Partial<CityWithInfo>;
const city3: PartialCity = {
  name: "Florence",
};

type RequiredCity = Required<CityWithInfo>;
const city4: RequiredCity = {
  name: "Florence",
  country: "Italy",
};
