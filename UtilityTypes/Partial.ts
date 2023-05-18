// Partial<T>
// Partial은 generic T 의 모든타입들을 Optional로 만들어 준다.

interface Board {
  title: string;
  description: string;
  create_at: string;
}

const firstBoard: Board = {
  title: "NAME",
  description: "DESC",
  create_at: "2023-05-17",
};

// Partial<Board>
// Partial<Board> =  {
//   title?: string;
//   description?: string;
//   create_at?: string;
// }
const partialFirstBoard: Partial<Board> = {
  title: "NAME",
};
type P<T> = { // 실제 Partial 만들어보기.
  [Key in keyof T]?: T[Key];
  // 1. 인덱스 시그니쳐를 이용해 반복적으로 올수 있게 한다.
  // 2. generic T 를 이용하여 어떠한 인터페이스가 오든 인덱스시그니쳐의 값은 해당 generic T의 키값만 들어오게한다.
  // 3. value는 array[key] = value인 점을 이용하여 generic T에서 해당 Key의 value값을 가져오게 T[Key]로 입력한다.
}