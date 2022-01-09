export function clickedPlusAdjacent(clickedId) {
  const idsToToggle = [clickedId]
  // values of id's that don't require left check
  const idsNotRequiringRightCheck = [1, 6, 11, 16, 21]
  // check below
  clickedId > 5 ? idsToToggle.push(clickedId - 5) : null
  // check above
  clickedId < 21 ? idsToToggle.push(clickedId + 5) : null
  // check right
  clickedId % 5 != 0 ? idsToToggle.push(clickedId + 1) : null
  // check left
  idsNotRequiringRightCheck.includes(clickedId)
    ? null
    : idsToToggle.push(clickedId - 1)

  return idsToToggle
}

export const levels = {
  1: {
    lights: [11, 13, 15],
    minAttempts: 6,
    maxAttempts: 11,
  },
  2: {
    lights: [1, 3, 5, 6, 8, 10, 16, 18, 20, 21, 23, 25],
    minAttempts: 6,
    maxAttempts: 11,
  },
  3: {
    lights: [2, 4, 6, 7, 9, 10, 11, 12, 14, 15, 16, 17, 19, 20, 22, 24],
    minAttempts: 6,
    maxAttempts: 11,
  },
  4: {
    lights: [6, 7, 9, 10, 16, 20, 21, 22, 24, 25],
    minAttempts: 6,
    maxAttempts: 11,
  },
  5: {
    lights: [1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 15, 19, 20, 21, 22, 24, 25],
    minAttempts: 6,
    maxAttempts: 11,
  },
  6: {
    lights: [11, 13, 15, 16, 18, 20, 22, 23, 24],
    minAttempts: 7,
    maxAttempts: 12,
  },
  7: {
    lights: [1, 2, 3, 4, 6, 10, 11, 15, 16, 20, 21, 22, 23, 24],
    minAttempts: 7,
    maxAttempts: 12,
  },
  8: {
    lights: [8, 12, 14, 16, 18, 20, 22, 24],
    minAttempts: 7,
    maxAttempts: 12,
  },
  9: {
    lights: [2, 4, 6, 7, 8, 9, 10, 12, 13, 14, 17, 19, 20, 21, 22, 23],
    minAttempts: 7,
    maxAttempts: 12,
  },
  10: {
    lights: [2, 3, 4, 7, 8, 9, 12, 13, 14],
    minAttempts: 7,
    maxAttempts: 12,
  },
  11: {
    lights: [1, 3, 5, 6, 8, 10, 11, 13, 15, 16, 18, 20, 22, 23, 24],
    minAttempts: 8,
    maxAttempts: 13,
  },
  12: {
    lights: [1, 2, 3, 4, 5, 7, 9, 11, 12, 14, 15, 17, 18, 19, 22, 24],
    minAttempts: 8,
    maxAttempts: 13,
  },
  13: {
    lights: [4, 8, 10, 12, 14, 16, 18, 22],
    minAttempts: 8,
    maxAttempts: 13,
  },
  14: {
    lights: [12, 17, 22],
    minAttempts: 8,
    maxAttempts: 13,
  },
  15: {
    lights: [7, 17],
    minAttempts: 8,
    maxAttempts: 13,
  },
  16: {
    lights: [1, 6, 11, 16, 21, 22, 23, 24, 25],
    minAttempts: 9,
    maxAttempts: 14,
  },
  17: {
    lights: [13, 17, 18, 19, 21, 22, 23, 24, 25],
    minAttempts: 9,
    maxAttempts: 14,
  },
  18: {
    lights: [3, 7, 9, 11, 13, 15, 17, 19, 23],
    minAttempts: 9,
    maxAttempts: 14,
  },
  19: {
    lights: [1, 3, 5, 11, 13, 15, 21, 23, 25],
    minAttempts: 9,
    maxAttempts: 14,
  },
  20: {
    lights: [11, 15],
    minAttempts: 9,
    maxAttempts: 14,
  },
  21: {
    lights: [2, 3, 4, 5, 7, 12, 13, 14, 17, 22],
    minAttempts: 10,
    maxAttempts: 15,
  },
  22: {
    lights: [2, 3, 4, 6, 10, 11, 15, 16, 20, 22, 23, 24],
    minAttempts: 10,
    maxAttempts: 15,
  },
  23: {
    lights: [13, 14, 15, 18, 19, 23],
    minAttempts: 10,
    maxAttempts: 15,
  },
  24: {
    lights: [11, 15, 16, 17, 18, 19, 20, 22, 25],
    minAttempts: 10,
    maxAttempts: 15,
  },
  25: {
    lights: [1, 6, 7, 11, 12, 13, 16, 17, 18, 19, 22, 23, 24, 25],
    minAttempts: 10,
    maxAttempts: 15,
  },
  26: {
    lights: [1, 5, 6, 10, 11, 12, 13, 14, 15, 16, 20, 21, 25],
    minAttempts: 11,
    maxAttempts: 16,
  },
  27: {
    lights: [3, 7, 8, 9, 13, 18, 23],
    minAttempts: 11,
    maxAttempts: 16,
  },
  28: {
    lights: [13, 14, 15, 18, 19, 20, 23, 24, 25],
    minAttempts: 11,
    maxAttempts: 16,
  },
  29: {
    lights: [7],
    minAttempts: 11,
    maxAttempts: 16,
  },
  30: {
    lights: [13],
    minAttempts: 11,
    maxAttempts: 16,
  },
  31: {
    lights: [1, 5, 6, 7, 10, 11, 13, 15, 16, 19, 20, 21, 25],
    minAttempts: 12,
    maxAttempts: 17,
  },
  32: {
    lights: [1, 2, 3, 4, 5, 9, 13, 17, 21, 22, 23, 24, 25],
    minAttempts: 12,
    maxAttempts: 17,
  },
  33: {
    lights: [4, 9, 11, 13, 15, 16, 20, 21, 24, 25],
    minAttempts: 12,
    maxAttempts: 17,
  },
  34: {
    lights: [3, 5, 6, 10, 11, 15, 17, 18, 20, 22, 23, 24, 25],
    minAttempts: 12,
    maxAttempts: 17,
  },
  35: {
    lights: [4, 5, 7, 9, 11, 15, 16, 18, 20],
    minAttempts: 12,
    maxAttempts: 17,
  },
  36: {
    lights: [3, 7, 9, 11, 15, 16, 17, 18, 19, 20, 21, 25],
    minAttempts: 13,
    maxAttempts: 18,
  },
  37: {
    lights: [7, 8, 9, 12, 13, 14, 17, 18, 19],
    minAttempts: 13,
    maxAttempts: 18,
  },
  38: {
    lights: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25],
    minAttempts: 13,
    maxAttempts: 18,
  },
  39: {
    lights: [2, 4, 6, 11, 12, 18, 19, 22, 24],
    minAttempts: 13,
    maxAttempts: 18,
  },
  40: {
    lights: [12, 14],
    minAttempts: 13,
    maxAttempts: 18,
  },
  41: {
    lights: [1, 5, 7, 9, 13, 18, 23],
    minAttempts: 14,
    maxAttempts: 19,
  },
  42: {
    lights: [1, 2, 3, 6, 9, 11, 12, 13, 16, 19, 21, 22, 23],
    minAttempts: 14,
    maxAttempts: 19,
  },
  43: {
    lights: [1, 5, 6, 7, 9, 11, 12, 13, 17, 22, 23, 24],
    minAttempts: 14,
    maxAttempts: 19,
  },
  44: {
    lights: [6, 7, 9, 10, 11, 12, 13, 14, 15, 18, 22, 23, 24],
    minAttempts: 14,
    maxAttempts: 19,
  },
  45: {
    lights: [2, 3, 4, 6, 8, 13, 14, 15, 16, 17, 18, 19, 21, 23, 25],
    minAttempts: 14,
    maxAttempts: 19,
  },
  46: {
    lights: [3, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18, 19, 23],
    minAttempts: 15,
    maxAttempts: 20,
  },
  47: {
    lights: [3, 6, 7, 8, 9, 10, 11, 13, 17, 20, 25],
    minAttempts: 15,
    maxAttempts: 20,
  },
  48: {
    lights: [6, 10, 13, 16, 20],
    minAttempts: 15,
    maxAttempts: 20,
  },
  49: {
    lights: [1, 5, 7, 9, 13, 17, 19, 21, 25],
    minAttempts: 15,
    maxAttempts: 20,
  },
  50: {
    lights: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    minAttempts: null,
    maxAttempts: null,
  }
}
// https://www.jaapsch.net/puzzles/javascript/lightjcl.htm
