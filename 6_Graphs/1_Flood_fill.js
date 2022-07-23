/**
 * https://leetcode.com/problems/flood-fill/
 *
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const num_rows = image.length;
  const num_cols = image[0].length;

  function get_neighbours(coord, color) {
    const [row, col] = coord;
    const delta_row = [-1, 0, 1, 0];
    const delta_col = [0, 1, 0, -1];
    const res = [];
    for (let i = 0; i < delta_row.length; i++) {
      let neighbour_row = row + delta_row[i];
      let neighbour_col = col + delta_col[i];
      // condition to push into res
      if (
        neighbour_row >= 0 &&
        num_rows > neighbour_row &&
        neighbour_col >= 0 &&
        num_cols > neighbour_col
      ) {
        // check for color
        if (image[neighbour_row][neighbour_col] === color) {
          res.push([neighbour_row, neighbour_col]);
        }
      }
    }
    return res;
  }

  function bfs(root) {
    const q = [root];
    const visited = Array.from({ length: num_rows }, (v, i) =>
      Array(num_cols).fill(false)
    );
    let [r, c] = root;
    // need to replace root node
    const currentColor = image[r][c];
    image[r][c] = color;
    // mark as visited
    visited[r][c] = true;

    while (q.length > 0) {
      // dequeue
      const node = q.shift();
      // get neighbor
      for (const neighbour of get_neighbours(node, currentColor)) {
        r = neighbour[0];
        c = neighbour[1];
        // if already visited, don't visit again
        if (visited[r][c]) continue;
        // replace the color
        image[r][c] = color;
        // enqueue
        q.push(neighbour);
        // mark as visited
        visited[r][c] = true;
      }
    }
  }

  bfs([sr, sc]);
  return image;
};
