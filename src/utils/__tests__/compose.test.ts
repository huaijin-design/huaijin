import compose from '../compose';

describe('compose', () => {
  it('should works', () => {
    const context = {
      x: 4,
      y: 2,
      z: 1,
    };
    function x(val: number): number {
      return context.x * val;
    }
    function y(val: number): number {
      return context.y * val;
    }
    function z(val: number): number {
      return context.z * val;
    }
    const composed = compose(
      x,
      y,
      z,
    );
    expect(composed(5)).toEqual(40);
  });
});
