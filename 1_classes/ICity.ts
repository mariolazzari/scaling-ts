export interface ICity {
  readonly name: string;
  country: string;
  population?: number;
}

export interface ICapitalCity extends ICity {
  capitalBuilding: string;
  landmarks: string[];
}
