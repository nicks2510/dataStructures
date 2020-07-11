var ratInMaze = function (maze) {
    var solutionMatrix = []
    let MazeLength = maze.length
    for (var i = 0; i < MazeLength; i++) {
        solutionMatrix.push(new Array(MazeLength).fill(0))
    }

    (function ratInMazeHelper(maze, solutionMatrix, x, y) {
        //base condition
        if (x == MazeLength - 1 && y == MazeLength - 1 && maze[x][y]) {
            solutionMatrix[x][y] = 1
            return true
        }

        if (x < MazeLength && y < MazeLength && maze[x][y] === 1) {
            solutionMatrix[x][y] = 1
            //gng down
            if (ratInMazeHelper(maze, solutionMatrix, x + 1, y))
                return true
            //gng right
            if (ratInMazeHelper(maze, solutionMatrix, x, y + 1))
                return true

            solutionMatrix[x][y] = 0;
            return false;
        }
        return false

    }(maze, solutionMatrix, 0, 0)) ? console.log(solutionMatrix) : console.log("no solution")

}

ratInMaze([
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]]
)
