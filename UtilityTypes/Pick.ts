// Pick<T, option>
// Pick은 generic T로부터 사용할 타입들만 옵션으로 가져올 수 있다.

type Picks<T, K extends keyof T> = {
  [P in K]: T[P];
  // 1. generic T 와 T의 Key값으로 이루어진 K를 가져와야 하기 때문에 T 와 T의 key값으로 이루어진 K를 불러온다.
  // 2. 이후 Partial 에서 하
};
interface pickTypes {
  title: string;
  description: string;
  deleted_at: string;
  created_at: string;
}

const newPick: Picks<pickTypes, "title" | "description" | "created_at"> = {
  title: "NAME",
  description: "DESC",
  created_at: "2023-05-17",
};
