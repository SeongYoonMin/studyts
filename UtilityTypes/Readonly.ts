// Readonly<T>
// Readonly 는 generic T를 수정할 수 없게 할때 사용한다.

type onlyRead<T> = {
  readonly [K in keyof T]: T[K];
};

interface readType {
  Voice: string;
  Sound: string;
}

const read: onlyRead<readType> = {
  Voice: "Mouse",
  Sound: "speaker",
};
const read2: readType = {
  Voice: "Mouse",
  Sound: "speaker",
};
read.Sound = "test";
read2.Sound = "test";
