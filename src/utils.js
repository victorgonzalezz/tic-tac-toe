export function findWinner(squares) {
    // Array with winning combinations
    const rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    // Iterate over array with winning combinations
    for (let i = 0; i < rows.length; i++) {
        const [a, b, c] = rows[i]

        // Check if the game board contains winning combination
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            // Return the winner ('x' or 'o')
            return squares[a]
        }
    }

    return null
}

export function areAllBoxesClicked(squares) {
    // Declare variable to store number of clicked squares.
    let count = 0

    squares.forEach(function (item) {
        // Check if box is clicked (not null)
        if (item !== null) {
            count++
        }
    })

    // Check if all squares are clicked (filled)
    if (count === 9) {
        return true
    } else {
        return false
    }
}