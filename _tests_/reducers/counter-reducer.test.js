import counterReducer from './../src/reducers/counter';

describe('counterReducer', () => {

  test('Temporary dummy test: two plus two is four', () => {
    expect(
      counter(0, {type: 'INCREMENT'})
    ).toEqual(1);
  });

  test('Temporary dummy test: two plus two is four', () => {
    expect(
      counter(1, {type: 'INCREMENT'})
    ).toEqual(2);
  });

  test('Temporary dummy test: two plus two is four', () => {
    expect(
      counter(2, {type: 'DECREMENT'})
    ).toEqual(1);
  });

  test('Temporary dummy test: two plus two is four', () => {
    expect(
      counter(1, {type: 'DECREMENT'})
    ).toEqual(0);
  });
});
