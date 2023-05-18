//  ReturnType<T>
//  ReturnType은 Parameters와 반대로 generic T에 대한 리턴값의 타입을 가져올 때 사용한다.

type Returns<T extends (...args:any) => any> = T extends (...args: any) => infer A ? A : never;