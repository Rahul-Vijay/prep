/**
 * https://leetcode.com/problems/minimum-knight-moves/
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function (x, y) {
  function get_neighbors(coord) {
    const [r, c] = coord;
    const delta_row = [-2, -2, -1, 1, 2, 2, 1, -1];
    const delta_col = [-1, 1, 2, 2, 1, -1, -2, -2];
    const neighbors = [];
    for (let i = 0; i < delta_row.length; i++) {
      let neighbor_row = delta_row[i] + r;
      let neighbor_col = delta_col[i] + c;
      neighbors.push([neighbor_row, neighbor_col]);
    }
    return neighbors;
  }

  // bfs
  function bfs(root) {
    let q = [root];
    let visited = new Set();
    let steps = 0;
    while (q.length > 0) {
      const n = q.length;
      for (let i = 0; i < n; i++) {
        // dequeue
        const node = q.shift();
        // stop bfs if coordinates found
        if (node[0] == y && node[1] == x) return steps;
        // find neighbors
        for (const neighbor of get_neighbors(node)) {
          const neighbor_str = neighbor.join(",");
          if (visited.has(neighbor_str)) continue;
          // enqueue
          q.push(neighbor);
          visited.add(neighbor_str);
        }
      }
      steps++;
    }
    return steps;
  }

  return bfs([0, 0]);
};
