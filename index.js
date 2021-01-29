const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

for (let i = 0; i < arrNumbers.length; i++) {
    let mod3 = (arrNumbers[i] % 3 === 0)
    let mod5 = (arrNumbers[i] % 5 === 0)

    if (mod3 && mod5) {
        console.log("FizzBuzz")
    } else if (mod3) {
        console.log("Fizz")
    } else if (mod5) {
        console.log("Buzz")
    } else {
        console.log(arrNumbers[i])
    }
}