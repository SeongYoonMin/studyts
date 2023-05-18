// Record<T, K>
// Record는 특정 타입의 객체를 저장할 때 사용한다. T 타입의 Key : K타입의 Value 형식으로 저장된다.

type Records<T extends keyof any, K> = {
  [Key in T]: K;
}