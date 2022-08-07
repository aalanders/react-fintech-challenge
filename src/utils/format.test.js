import { calculateMultiple } from "./format";

test("calculate multiple", () => {
  let results = calculateMultiple(100, 50);
  let expectedResult = 2;

  expect(results).toEqual(expectedResult);

  results = calculateMultiple(100, 0);
  expectedResult = 0;

  expect(results).toEqual(expectedResult);
});

// TODO: write test for other utils
