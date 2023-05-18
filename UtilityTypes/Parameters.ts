// Parameters<typeof T>
// Parameters는 generic T가 함수타입일때 해당 함수의 argument의 타입을 불러오기위해 사용한다.

type Params<T extends (...args:any) => any> = T extends (...args: infer A) => any ? A : never;

// infer 는 타입을 추론하는것은데 extends할 시 사용할 수 있다.
// 위 상황에서 ...args의 타입이 어떤타입이 올 지 모르니 추론하라는 뜻으로 사용되었다.
// 만약 추론된 값 A가 존재 할 경우 A를 사용하고 없을경우 never처리된다. 