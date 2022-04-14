import { songVerse } from "./index"

describe("BottleSong", () => {
  it("returns the first verses of the song", () => {
    const expected = "99 bottles of beer on the wall, 99 bottles of beer.Take one down and pass it around, 98 bottles of beer on the wall.";

    const result = songVerse(99);

    expect(result).toEqual(expected);
  })
})