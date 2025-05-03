const city = {
  name: "Insbruck",
  country: "Austria",
};

export type City = typeof city;

export type CityWithNickname = City & {
  nickname: string;
};

export type PartialCity = Partial<City>;

export type RequiredCity = Required<City>;

export type ReadonlyCity = Readonly<City>;

export type CityName = Pick<City, "name">;

export type CityWithoutCountry = Omit<City, "country">;
