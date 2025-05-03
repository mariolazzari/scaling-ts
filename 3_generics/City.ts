export type Country<T> = {
  name: T;
  capital: T;
};

export function printCity<T>(city: T): void {
  console.log(city);
}
