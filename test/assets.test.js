import sumar from './assets';

test('Sumar 2 + 2 es igual a 4', () => {
  expect(sumar.add(2, 2)).toBe(4);
});