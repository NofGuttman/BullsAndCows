const score = require('../app/score');

test("", () => {
    expect(score(
        [1, 2, 3, 4], 
        [5, 6, 7, 8]))
    .toEqual({bulls: 0, cows: 0})
});

test("", () => {
    expect(score(
        [1, 2, 3, 4], 
        [1, 3, 5, 0]))
    .toEqual({bulls: 1, cows: 1})
});

test("", () => {
    expect(score(
        [0, 9, 3, 8], 
        [5, 6, 7, 8]))
    .toEqual({bulls: 1, cows: 0})
});

test("", () => {
    expect(score(
        [4, 2, 0, 6], 
        [2, 6, 1, 0]))
    .toEqual({bulls: 0, cows: 3})
});

test("", () => {
    expect(score(
        [0, 8, 4, 2], 
        [0, 8, 4, 2]))
    .toEqual({bulls: 4, cows: 0})
});

test("", () => {
    expect(score(
        [9, 1, 8, 5], 
        [1, 2, 8, 5]))
    .toEqual({bulls: 2, cows: 1})
});