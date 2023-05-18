// interface generic

interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;
  map<K>(
    callbackfn: (value: T, index: number, array: T[]) => K,
    thisArg?: any
  ): K[];
  filter<F extends T>(
    predicate: (value: T, index: number, array: T[]) => value is F,
    thisArg?: any
  ): F[];
}

[1, 2, 3].forEach((el) => {
  console.log(el);
}); // 1,2,3 콘솔 출력
const maps = [1, 2, 3].map((el) => {
  return el.toString();
});
const filters = [1, 2, 3, 4, 5].filter((el) => {
  return el % 2 === 0;
});

// 공변성 반-공변성 - 함수간 대입
function returnNum(value: string): number {
  return +value;
}
function returnNumSmall(value: string): number | string {
  return value;
}

type returnNumType = (value: string) => number | string;
type returnNumTypeSmall = (value: string) => string;
const returnTestA: returnNumType = returnNum; // 좁은타입 -> 넓은타입에서는 대입 가능
const returnTestB: returnNumTypeSmall = returnNumSmall; // 넓은타입 -> 좁은타입 은 대입 불가

// 단 매개변수의 경우 그 반대에 해당한다.
function argsBigFunction(value: string | number) {
  return 0;
}
type argsBigType = (value: number) => number;
function argsSmallFunction(value: string) {
  return 0;
}
type argsSmallType = (value: number | string) => number;

const argsBig: argsBigType = argsBigFunction;
const argsSmall: argsSmallType = argsSmallFunction;

// 타입 중복 선언 - 오버로딩 - 같은 함수 혹은 타입을 중복 선언
// 하나의 함수 혹은 타입으로 선언할 수 없을 경우 중복하여 선언

function addNum(x: number, y: number): number {
  return x + y;
}

addNum(1,2);
addNum(1,2,3);
