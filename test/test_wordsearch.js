const chai = require("chai");
const assert = chai.assert;

const wordSearch = require("../wordsearch.js");

describe("#wordSearch()", function () {
  it("should return false if the word is not present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK",
      false
    );

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD",
      false
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function () {
    const result = wordSearch(
      [
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
        ["A", "W", "C", "L", "Q", "U", "A", "L"],
        ["S", "E", "I", "I", "F", "E", "L", "D"],
        ["Y", "F", "C", "G", "Q", "U", "A", "L"],
        ["H", "M", "J", "H", "E", "V", "R", "G"],
        ["W", "H", "C", "T", "Y", "E", "R", "L"],
        ["B", "F", "R", "H", "N", "E", "Y", "B"],
        ["U", "B", "T", "O", "A", "P", "A", "I"],
        ["O", "D", "C", "U", "K", "U", "A", "S"],
        ["E", "Z", "K", "S", "Q", "U", "A", "L"],
        ["E", "Z", "K", "E", "Q", "U", "A", "L"],
      ],
      "LIGHTHOUSE",
      true
    );
    assert.isTrue(result);
  });

  it("should return true if the word is present backwards vertically", function () {
    const result = wordSearch(
      [
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
        ["E", "Z", "K", "E", "Q", "U", "A", "L"],
        ["E", "Z", "K", "S", "Q", "U", "A", "L"],
        ["O", "D", "C", "U", "K", "U", "A", "S"],
        ["U", "B", "T", "O", "A", "P", "A", "I"],
        ["B", "F", "R", "H", "N", "E", "Y", "B"],
        ["W", "H", "C", "T", "Y", "E", "R", "L"],
        ["H", "M", "J", "H", "E", "V", "R", "G"],
        ["Y", "F", "C", "G", "Q", "U", "A", "L"],
        ["S", "E", "I", "I", "F", "E", "L", "D"],
        ["A", "W", "C", "L", "Q", "U", "A", "L"],
      ],
      "LIGHTHOUSE",
      true
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present backwards horizontally", function () {
    const result = wordSearch(
      [
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
        ["E", "Z", "K", "E", "Q", "U", "A", "L"],
        ["E", "Z", "K", "S", "Q", "U", "A", "L"],
        ["O", "D", "C", "U", "K", "U", "A", "S"],
        ["S", "B", "T", "E", "L", "P", "P", "A"],
        ["B", "F", "R", "H", "N", "E", "Y", "B"],
        ["W", "H", "C", "T", "Y", "E", "R", "L"],
        ["H", "M", "J", "H", "E", "V", "R", "G"],
        ["Y", "F", "C", "G", "Q", "U", "A", "L"],
        ["S", "E", "I", "I", "F", "E", "L", "D"],
        ["A", "W", "C", "L", "Q", "U", "A", "L"],
      ],
      "APPLE",
      false
    );

    assert.isTrue(result);
  });

  it("should return false if the letters array is empty", function () {
    const result = wordSearch([], "LIGHTHOUSE", false);

    assert.isFalse(result);
  });
});
