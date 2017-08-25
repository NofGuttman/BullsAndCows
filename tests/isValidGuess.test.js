const isValidGuess = require('../app/isValidGuess');

test("", () => {
    expect(isValidGuess([1, 2, 3, 4])).toBe(true);
});

test("", () => {
    expect(isValidGuess([])).toBe(false);
});

test("", () => {
    expect(isValidGuess([1, 2, 1, 4])).toBe(false);
});

test("", () => {
    expect(isValidGuess([1, 2, 3, 4, 5])).toBe(false);
});

test("", () => {
    expect(isValidGuess([2, 2, 3, 4])).toBe(false);
});

test("", () => {
    expect(isValidGuess([0, 8, 5, 9])).toBe(true);
});