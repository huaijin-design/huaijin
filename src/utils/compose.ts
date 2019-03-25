function compose<T>(...funcs: any[]): (...args: any[]) => T {
  return funcs.reduce(
    (acc, cur) => (...args: any[]) => acc(cur(...args)),
    (arg: any) => arg,
  );
}

export default compose;
