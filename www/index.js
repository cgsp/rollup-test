// 回溯 + dfs
const exist = (board, word) => {
  const rowLen = board.length
  const colLen = board[0].length

  const used = Array(rowLen)
    .fill(0)
    .map(() => Array(colLen))

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (board[i][j] === word[0] && canFind(i, j, 0)) return true
    }
  }

  function canFind(row, col, i) {
    if (i === word.length) return true
    if (row < 0 || row >= rowLen || col < 0 || col >= colLen) return false

    if (used[row][col] || board[row][col] !== word[i]) return false

    used[row][col] = true

    if (
      canFind(row + 1, col, i + 1) ||
      canFind(row - 1, col, i + 1) ||
      canFind(row, col + 1, i + 1) ||
      canFind(row, col - 1, i + 1)
    )
      return true

    used[row][col] = false

    return false
  }

  return false
}
