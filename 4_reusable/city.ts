export namespace Cities {
  export type City = {
    name: string;
    country: string;
  };

  export function displayCity(city: City): string {
    return `${city.name}, ${city.country}`;
  }
}
