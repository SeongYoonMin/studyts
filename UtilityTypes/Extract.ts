// Extract<T, U>
// Extract 는 Exclude와 다르게 옵션을 포함시킨다.

type Extracts<T, U> = T extends U ? T : never;
