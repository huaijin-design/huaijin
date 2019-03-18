import omit from '../omit';

describe('omit', () => {
  it('should exclude the key specified in the object', () => {
    const obj1: object = {
      name: 'chenyueban',
      age: 18,
      weight: 140,
      height: 180,
    };
    const obj2: object = {
      name: 'chenyueban',
      age: 18,
    };
    expect(omit(obj1, ['weight', 'height'])).toEqual(obj2);
  });
});
