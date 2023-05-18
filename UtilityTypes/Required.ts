// Required<T>
// Required는 Partial 과 다르게  generic T의 모든 타입을 필수로 만들때사용한다.

type requires<T> = {
  [K in keyof T]-?: T[K];
  // ?: 는 optional로 만들어주는데
  // -?: 는 optional의 부정형? 으로써 optional이 아니게 한다 = 필수형
}