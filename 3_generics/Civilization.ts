import { NotablePeople, Person } from "./Person";

export type Civilization<T> = {
  name: string;
  location: string;
  notablePeople: NotablePeople<T>[];
};
