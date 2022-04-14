const TWO_BOTTLES = 2
const ONE_BOTTLE = 1
const NO_BOTTLE = 0

export function bottleVerse(bottlesNumber: number): any {
  
    let bottleVerse = `${bottlesNumber} bottles of beer on the wall, ${bottlesNumber} bottles of beer.Take one down and pass it around, ${bottlesNumber-1} bottles of beer on the wall.`

    if (bottlesNumber === TWO_BOTTLES) {
      return `2 bottles of beer on the wall, 2 bottles of beer.Take one down and pass it around, 1 bottle of beer on the wall.`
    }

    if (bottlesNumber === ONE_BOTTLE) {
      return `1 bottle of beer on the wall, 1 bottle of beer.Take it down and pass it around, no more bottles of beer on the wall.`
    }

    if (bottlesNumber === NO_BOTTLE) {
      return `No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.`
    }

  return bottleVerse

};
