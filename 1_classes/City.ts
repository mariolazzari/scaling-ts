export class City {
  name: string;
  country: string;

  constructor(name: string, country: string) {
    this.name = name;
    this.country = country;
  }

  private displayCityInfo(): string {
    return `${this.name}, ${this.country}`;
  }

  public getCityInfo(): string {
    return this.displayCityInfo();
  }
}

// type guard
export function outputLocation(location: City | string) {
  if (typeof location === "string") {
    console.log(location);
  } else {
    console.log(location.getCityInfo());
  }
}
