import { bottleVerse } from "./index"

describe("BottleSong", () => {
  it("returns the verse of the bottle", () => {
    const expected = "99 bottles of beer on the wall, 99 bottles of beer.Take one down and pass it around, 98 bottles of beer on the wall.";

    const result = bottleVerse(99);

    expect(result).toEqual(expected);
  })

  it("returns the verse when there are two bottles", () => {
    const expected =  "2 bottles of beer on the wall, 2 bottles of beer.Take one down and pass it around, 1 bottle of beer on the wall.";
    
    const result = bottleVerse(2);

    expect(result).toEqual(expected);
  })

  it("returns the verse when there is one bottle", () => {
    const expected =  "1 bottle of beer on the wall, 1 bottle of beer.Take it down and pass it around, no more bottles of beer on the wall.";
    
    const result = bottleVerse(1);

    expect(result).toEqual(expected);
  })

  it("returns the verse when there isn't bottle", () => {
    const expected =  "No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.";
    
    const result = bottleVerse(0);

    expect(result).toEqual(expected);
  })
})