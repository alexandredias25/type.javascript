function fatorial(num) {
    let fat = 1
    for (let contador = num; contador > 1; contador--) {
        fat *= contador
    }
    return fat
}
console.log(fatorial(5))


//fatorial e = a 5 x 4 x 3 x 2 x 1 