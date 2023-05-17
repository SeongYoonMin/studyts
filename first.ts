// type 형식
type addTypes = (x: number, y: number) => number;

// interface 형식
interface interTypes {
  (x: number, y: number): number;
}

// 함수의 타입 선언
const addFunction: (x: number, y: number) => number = (x, y) => x + y;
const typesFunction: addTypes = (x, y) => {
  return x + y;
};
const interFunction: interTypes = (x, y) => {
  return x + y;
};

// 배열의 타입 선언
const arr: string[] = ["123", "12345"];
const arr2: Array<string> = ["123", "12345"]; // Array<> = Generic 타입
const arr3: [number, string, number] = [123, "asdf", 123]; // 튜플 형식(배열내의 갯수 정립)

// 객체의 타입 선언

const obj: { a: number; b: string } = { a: 123, b: "string" };

// as
let a = 123;
a = "hello"; // 타입 에러
a = "hello" as unknown as number; // as 를 이용하여 타입 변경

// 강제성 부여 !
const head = document.querySelector("#head"); // HTMLElement | null;
const head = document.querySelector("#head")!; // HTMLElement

// string 과 String 의 차이
const small: string = "small";
const big: String = "Big"; // 래퍼타입 = new String() 같은 경우 typeScript 에서는 쓰지않는것을 권장

// 타입의 값 커스텀

type Custom = "custom";
const c: Custom = "custom";

type SemiCustom = `This is ${Custom}`; // This is custom
const c2: SemiCustom = "This is custom";

type multiCustom = "custom" | "custom2";
const c3: multiCustom = "custom"; // or "custom2"

// rest
function rest(...args: string[]) {
  console.log(args);
}
rest(1, 2, 3); // number타입이라 에러
rest("1", "2", "3"); // string타입이라 충족

// enum
const enum FunctionArrow {
  Up,
  Down,
  Left,
  Right,
}

const OArrow = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const; // as const 를 붙일 경우 값 수정 불가 = readOnly
// as const 를 붙이지 않을 경우 typeScript가 Up, Down, Left, Right를 각각의 값이 아닌 Number 라는 타입을 가르키게됨.

// keyof typeof
const types = { a: "string", b: "hello" } as const;
type Key = keyof typeof types; // typeof를 이용해 types를 타입형식으로 { a: string, b: string }으로 변환 시킨다. 그리고 변환된 객체의 타입형식을 keyof를 통해 key값만을 가져온다. 그럼 type Key = "a" | "b" 라는 타입형식이 된다.
type Value = (typeof types)[keyof typeof types]; // types 의 Key 에 대한 Value 를 가져옴
// types 는 as const에 의해 엄격하게 a(key) : "string"(value)와 같은 형식으로 타입이 지정되어있기에 keyof typeof types = "a" | "b" 의 값 a: "string", b: "hello" 의 value값인 "string" | "hello" 가 Value의 타입형식이 된다.

// &(intersection) 과 |(union) 의 차이
// &는 해당 타입이 가르키는 모든 속성이 다 있어야함.
// |는 해당 타입이 가르키는 속성 중 하나만 있어도 됨.

// extends
type Animal = { breath: true };
type Human = Animal & { think: true };
const men: Human = { breath: true, think: true };

interface Animals {
  breath: true;
}
interface Humans extends Animal {
  think: true;
}
const women: Humans = { breath: true, think: true };

// void
function breath(): void {
  // return 할 시 void가 아니기에 에러. 단, undefined일 경우 허용
}
interface Mouse {
  talk: () => void;
}
function ears(callbacks: () => void) {
  return callbacks;
}
const talkMouse = {
  talk() {
    return "wawawawawa";
  },
};
// 매개변수와 메서드에서는 void 타입으로 지정해도 에러가 발생하지않음 = 해당 상태에서의 void는 사용하지 않겠다는의미
// 함수에서의 void 는 리턴이 없다는 의미

declare function customFunction(
  arr: number[],
  callback: (el: number) => undefined
): void;

let numberList: number[] = [];
customFunction([1, 2, 3], (el) => numberList.push(el)); // 현 상황에 push의 return타입은 undefined이기때문에 에러 발생

declare function customFunction2(
  arr: number[],
  callback: (el: number) => void
): void;

let numberList2: number[] = [];
customFunction2([1, 2, 3], (el) => numberList2.push(el)); // 현 상황에 push의 return타입은 number이나 타입 선언시 void로 넣음으로 인해서 return 에 관여하지않아 에러 발생 X

// any와 unknown의 차이  = any는 타입 자체가 없는 타입스크립트를 안쓰는 느낌이라면 unknown은 아직 타입이 지정되지않은, 즉 타입을 지정해주면 해당타입으로써 사용할 수 있는 형식이다.

// type guard
function typeGuardEx(a: number | string) {
  if (typeof a === "string") {
    console.log(a);
  } else {
    console.log(a + 3);
  }
}
typeGuardEx("asdf");
typeGuardEx(5);
function guardNumArray(a: number | number[]) {
  if (Array.isArray(a)) {
    console.log(a[2]);
  } else {
    console.log(a);
  }
}
guardNumArray(5);
guardNumArray([5, 3, 2, 4]);
function guardClass(params: classA | classB) {
  // class는 타입으로도 올수 있는데 이때 인스턴스로써 온다.
  if (params instanceof classA) {
    //  class가 인스턴스형식으로 오기 때문에 instanceof로 어떤 형태의 인스턴스인지 체크
    params.aaa();
  } else {
    params.bbb();
  }
}
class classA {
  aaa() {}
}
class classB {
  bbb() {}
}
guardClass(classA); // class 직접 넣으면 안된다. new classA로 생성해야한다.
guardClass(new classB());
type typeB = { type: "B"; bbb: string };
type typeC = { type: "C"; ccc: string };
type typeD = { type: "D"; ddd: string };

function guardType(a: typeB | typeC | typeD) {
  if (a.type === "B") {
    // a.type 이 "B" 라는 값인지 체크
    console.log(a.bbb);
  } else if ("ccc" in a) {
    // "속성명" in a - 해당속성명이 존재하는지 체크
    console.log(a.type);
  } else {
    console.log(a.ddd);
  }
}

// custom Type Guard
interface Cat {
  meow: string;
}
interface Dog {
  wal: string;
}
function animalSound(a: Cat | Dog): a is Dog {
  // 타입 판별을 위한 함수
  if ((a as Cat).meow) {
    // a 에 meow라는 key값이 있을 경우  = 고양이 = false
    return false;
  }
  return true; // 아니면 true
}
function myPet(a: Cat | Dog) {
  if (animalSound(a)) {
    console.log(a.wal);
  } else {
    console.log(a.meow);
  }
}
myPet({ meow: "asdf" });

// errors Type Guard
// Promise는 실행 시 Pending(대기) 상태를 거쳐 Settled(완료) 상태가 된다. 해당 상태에는 Fulfilled(성공, then), Rejected(실패, catch) 라는 두가지 상태가 있다.
const isRejected = (
  input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => {
  return input.status === "rejected";
};
const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseSettledResult<T> => {
  return input.status === "fulfilled";
};

const promises = await Promise.allSettled([
  Promise.resolve("a"),
  Promise.resolve("b"),
]);
const erros = promises.filter(isRejected); // 실패한 코드들
const resolves = promises.filter(isFulfilled);

export {};

// {}, Object(대문자O) 는 모든 타입(null, undefined 제외), object = 객체 타입

// Index Signature
type IndexSignatureType = { [key: string]: number }; // 몇개가 될지 모르는 객체의 값의 형식을 무조건 key: string, value: number로 받겠다고 선언.
interface IndexSignatureInterface {
  [key: string]: number;
}
const indexType: IndexSignatureType = {
  a: 234,
  234: 234,
  sdf: 4932,
};
const indexInterface: IndexSignatureInterface = {
  a: 234,
  b: 234,
  c: 234,
};

type SignatureTypeList = "Human" | "Animal" | "Fish";
type SignatureValueList = { [key in SignatureTypeList]: SignatureTypeList };

// class, implements, extends
interface impleClassA {
  readonly a: string;
  b: number;
}
class impleClassB implements impleClassA {
  a: string = "123";
  b: number = 123;
  private c: string = "234";
  protected d: string = "345";
}
class impleClassC extends impleClassB {
  method() {
    console.log(this.d); // protected라서 메소드에서 사용 가능
  }
}
new impleClassC().a; // '123'
new impleClassC().b; // 123
new impleClassC().c; // private이기 때문에 impleClassB 안에서만 호출할 수 있음.
new impleClassC().d; // private와 비슷한데 상속 받았을 시 해당 클래스안에서 사용할 수 있고, 인스턴스로써는 사용 불가능

// optional = ?:
type optionalTypes = {
  a: number,
  b?: string,
}
const optionalValues: optionalTypes = {
  a: 1,
  // b: 'asdf' b는 optional 이기 때문에 있어도 그만 없어도그만. 그러나 있을 경우 string타입을 지켜주어야함.
  // c: 23 a,b외에는 선언되어있지 않기 때문에 에러 발생
}

// generic - type을 변수처럼 사용하는 것

function genericFunctions<T extends string | number>(x: T, y: T): T{
  return x + y;
};
genericFunctions(1,2);
genericFunctions('1','2');
genericFunctions(true, false); // generic T 는 string | number이기 때문에 Boolean이 들어올 수 없다.