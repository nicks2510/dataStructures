/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    var dp = [];
    var rows = obstacleGrid.length
    var columns = obstacleGrid[0].length
    for (let i = 0; i < rows; i++) {
        dp[i] = new Array(columns).fill(0)
    }
    var blocker = false
    for (let i = 0; i < columns; i++) {
        if (obstacleGrid[0][i] === 1) blocker = true
        dp[0][i] = blocker ? 0 : 1
    }
    blocker = false
    for (let i = 0; i < rows; i++) {
        if (obstacleGrid[i][0] === 1) blocker = true
        dp[i][0] = blocker ? 0 : 1
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < columns; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0
            }
            else
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

        }
    }
    return dp[rows - 1][columns - 1]
};

console.log( uniquePathsWithObstacles([
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ])
)
console.log( uniquePathsWithObstacles([[0,0]]))
