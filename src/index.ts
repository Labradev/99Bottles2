const TWO_BOTTLES = 2

export function bottleVerse(bottlesNumber: number): any {

  let bottleVerse = `${bottlesNumber} bottles of beer on the wall, ${bottlesNumber} bottles of beer.Take one down and pass it around, ${bottlesNumber-1} bottles of beer on the wall.`

  if (bottlesNumber === TWO_BOTTLES) {
    return `2 bottles of beer on the wall, 2 bottles of beer.Take one down and pass it around, 1 bottle of beer on the wall.`
  }

  return bottleVerse

};
