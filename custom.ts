// custom Type Script

interface Arr<T> {
  forEach(callbacks: (value: T, index: number) => void): void;
  map<S>(callbacks: (value: T, index: number) => S): S[];
  filter<F extends T>(callbacks: (value: T, index: number) => value is F): F[];
}
interface st<T> {
  replace(search: string | RegExp, value:string) : string;
}

const customA: Arr<number> = [1, 2, 3];
customA.forEach((el) => {
  console.log(el);
});
const getMapA = customA.map((el) => {
  return el.toString();
});
const getMapB = customA.map((el) => {
  return el % 2 === 0;
});

const customB: Arr<number | string> = ["1", 2, "3", 4, "5"];
const getFilterA = customB.filter((el) : el is string => {
  return typeof el === "string";
});
