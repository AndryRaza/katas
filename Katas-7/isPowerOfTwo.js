function isPowerOfTwo(n) {
    let result = n;
    while (result > 1) {
        result /= 2
    }
    return (result == 1)
}

function isPowerOfTwo(n) {
    return Number.isInteger(Math.log2(n));

}