function a(this: Window | typeof obj) {
  console.log(this);
}
const obj = { key: "Value" };
const b = a.bind(obj); // Value

// bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;
// type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;
// 타입을 추론하여 리턴 하는 함수
// type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;
// 타입을 추론하지 못할경우 generic T로 return 그것이 아니라면 매개변수와 리턴의 타입을 유추하여 리턴
// bind는 사용하는 경우가 너무 다양하여 오버로딩 하여 타입을 방어하였다.
type Tpt = ThisParameterType<typeof a>