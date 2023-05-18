// Exclude<T, U>
// Exclude 는 T의 key타입들에서 U 타입을 제외 시킨다.

type Excludes<T, E> = T extends E ? never : T;

// 삼항연산자 - 조건 ? 조건충족시 결과 : 조건 불충족시 결과

type Animals = "Dog" | "Cat" | "Fish";
interface interAnimals {
  Dog: string;
  Cat: string;
  Fish: string;
}
// type이 키 로만 이루어져있을 경우
type fourlegs = Excludes<Animals, "Fish">;

//type이 key: value 로 이루어져있을경우
type fourLeg = Excludes<keyof interAnimals, "Fish">;
