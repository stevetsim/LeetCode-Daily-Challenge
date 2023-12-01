/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let box = {}

    // Check rows
    for (let i = 0; i < 9; i++) {
        let row = new Set()
        let column = new Set()

        for (let j = 0; j < 9; j++) {
            const rowCell = board[i][j]
            const columnCell = board[j][i]
            const boxCell = board[i][j]

            if (boxCell !== '.') {
                const boxLocation = `${Math.floor(i / 3)},${Math.floor(j / 3)}`

                if (box[boxLocation] && box[boxLocation].includes(boxCell)) return false
                else {
                    if (!box[boxLocation]) box[boxLocation] = []
                    box[boxLocation].push(boxCell)
                }
            }

            if (rowCell !== '.') {
                if (row.has(rowCell)) return false
                row.add(rowCell)
            }

            if (columnCell !== '.') {
                if (column.has(columnCell)) return false
                column.add(columnCell)
            }
        }
    }


    return true
};
