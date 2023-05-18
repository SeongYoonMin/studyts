// NonNullable<T>
// generic T 에서 Null 이나 Undefined를 제외하고 가져올 때 사용한다.

type NonNulls<T> = T extends null | undefined ? never : T;