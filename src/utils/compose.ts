const compose = (...funcs: any[]) =>
  funcs.reduce(
    (a, b) => (...args: any[]) => a(b(...args)),
    (arg: any) => arg
  );

export default compose;
