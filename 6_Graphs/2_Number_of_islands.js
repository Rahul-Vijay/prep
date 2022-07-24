/**
 *
 * https://leetcode.com/problems/number-of-islands/
 *
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const num_rows = grid.length;
  const num_cols = grid[0].length;

  function get_neighbours(coord) {
    const delta_row = [-1, 0, 1, 0];
    const delta_col = [0, 1, 0, -1];
    const [row, col] = coord;
    const res = [];
    for (let i = 0; i < delta_row.length; i++) {
      let neighbour_row = row + delta_row[i];
      let neighbour_col = col + delta_col[i];
      if (
        neighbour_row >= 0 &&
        neighbour_row < num_rows &&
        neighbour_col >= 0 &&
        neighbour_col < num_cols
      ) {
        // 4 directionality neighbors
        res.push([neighbour_row, neighbour_col]);
      }
    }
    return res;
  }

  function bfs(root) {
    let q = [root];
    const [row, col] = root;
    // marking visited
    grid[row][col] = 0;
    while (q.length > 0) {
      // dequeue
      const node = q.shift();
      // get neighbours
      for (const neighbor of get_neighbours(node)) {
        const [r, c] = neighbor;
        // check if previously visited or 0
        if (grid[r][c] == 0) continue;
        // enqueue
        q.push(neighbor);
        // mark as visited
        grid[r][c] = 0;
      }
    }
  }

  // driver code
  let count = 0;
  // go through each coordinate
  for (let i = 0; i < num_rows; i++) {
    for (let j = 0; j < num_cols; j++) {
      if (grid[i][j] == 0) continue;
      bfs([i, j]);
      count++;
    }
  }

  return count;
};
