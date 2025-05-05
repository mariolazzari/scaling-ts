import { describe, expect, it, expectTypeOf } from "vitest";
import { City, printCity } from "./script";

describe("printCity", () => {
  it("should return the city name and country", () => {
    const city: City = {
      name: "Paris",
      country: "France",
    };
    const result = printCity(city);

    expect(result).toBe("Paris, France");
  });
});

describe("Check type", () => {
  it("should be of type City", () => {
    const city: City = {
      name: "Paris",
      country: "France",
    };
    expect(printCity).toBeTypeOf("function");
    expectTypeOf(printCity(city)).toEqualTypeOf<string>();
    expectTypeOf(city).toEqualTypeOf<City>();
    expectTypeOf(city.name).toEqualTypeOf<string>();
  });
});
