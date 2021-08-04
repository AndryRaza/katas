var typeOfTriangle = function (sideA, sideB, sideC) {
    let tab = [sideA, sideB, sideC];
    tab = tab.sort(function (a, b) {
        return a - b
    })

    if (!sideA.toString().match(/[0-9]/) || !sideB.toString().match(/[0-9]/) || !sideC.toString().match(/[0-9]/)) {
        return 'Not a valid triangle';
    }
    if (tab[0] + tab[1] <= tab[2]) {
        return 'Not a valid triangle';
    }
    if (tab[0] == tab[1] && tab[0] == tab[2]) {
        return 'Equilateral';
    }
    if (tab[0] != tab[1] && tab[1] != tab[2] && tab[0] != tab[2]) {
        return 'Scalene'
    }
    return 'Isosceles'
}