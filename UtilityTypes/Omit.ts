// Omit<T, option>
// Omit은 generic T에서 특정 option을 제외하고 타입을 불러올 수 있다.
// Omit은 Pick 과 Exclude를 이용하여 만들 수 있다.

type typeAnimals = "Dog" | "Cat" | "Fish";
interface interfaceAnimals {
  Dog: string;
  Cat: string;
  Fish: string;
}

type exTypeAnimals = Exclude<typeAnimals, "Fish">;
type exInterfaceAnimals = Exclude<keyof interfaceAnimals, "Fish">;

type Omits<T, O extends keyof any> = Pick<T, Exclude<keyof T, O>>;

const fourLegAnimals: Omits<interfaceAnimals, exTypeAnimals> = {
  Fish: "sunset Fish",
};
