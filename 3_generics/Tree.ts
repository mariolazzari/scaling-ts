export type Tree = {
  name: string;
  height: number;
  age: number;
};

export type TreeDetails<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
