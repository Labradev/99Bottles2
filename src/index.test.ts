import { bottleVerse } from "./index"

describe("BottleSong", () => {
  it("returns the verse of the bottle", () => {
    const expected = "99 bottles of beer on the wall, 99 bottles of beer.Take one down and pass it around, 98 bottles of beer on the wall.";

    const result = bottleVerse(99);

    expect(result).toEqual(expected);
  })

  it("returns the verse when there is bottles", () => {
    const expected =  "2 bottles of beer on the wall, 2 bottles of beer.Take one down and pass it around, 1 bottle of beer on the wall.";
    
    const result = bottleVerse(2);

    expect(result).toEqual(expected);
  })
})