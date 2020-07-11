var numIslands = function (grid) {
    if (grid.length === 0) return 0
    var rows = grid.length
    var columns = grid[0].length
    var count = 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] == '1') {
                count++
                helper(grid, i, j)
            }
        }
    }
    return count;
    function helper(grid, i, j) {
        if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[0].length || grid[i][j] !== '1') {
            return
        }
        grid[i][j] = 0

        helper(grid, i - 1, j)
        helper(grid, i + 1, j)
        helper(grid, i, j - 1)
        helper(grid, i, j + 1)

    }
};

console.log(numIslands([
['1', '1', '1', '1', '0'],
['1', '1', '0', '1', '0'],
['1', '1', '0', '0', '0'],
['0', '0', '0', '0', '0']]))