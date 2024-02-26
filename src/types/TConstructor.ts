export type TConstructor<T extends abstract new (...params: any) => any> = (
  new (...params: ConstructorParameters<T>) => InstanceType<T>
);
