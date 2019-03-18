function compose(...funcs: any[]): (...args: any[]) => any {
  return funcs.reduce(
    (acc, cur) => (...args: any[]) => acc(cur(...args)),
    (arg: any) => arg,
  );
}

export default compose;
