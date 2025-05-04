export type Person = {
  name: string;
  occupation: string;
};

export type Architect = Person & {
  occupation: "Architect";
};

export type Poet = Person & {
  occupation: "Poet";
};

export type Philosopher = Person & {
  occupation: "Philosopher";
};

export type Pharaoh = Person & {
  occupation: "Pharaoh";
};

export type General = Person & {
  occupation: "General";
};

export type NotablePeople<T> = T extends Person ? T : never;
