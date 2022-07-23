/**
 * 
 * Given an (unweighted) graph, 
 * return the length of the shortest path between 
 * two nodes A and B, in terms of the number of edges.

Input:

Graph represented in adjacency list
graph: {
  0: [1, 2],
  1: [0, 2, 3],
  2: [0, 1],
  3: [1]
}
A: 0
B: 3

Output: 2
 * 
 * 
 */

function shortestPath(graph, a, b) {
  function get_neighbours(node) {
    return graph[node];
  }

  function bfs(root, target) {
    let q = [root];
    let visited = new Set([root]);
    let depth = 0;
    while (q.length > 0) {
      const n = q.length;
      for (let i = 0; i < n; i++) {
        // dequeue
        const node = q.shift();
        // if we have visited the target, return depth
        if (node === target) return depth;
        for (const neighbour of get_neighbours(node)) {
          if (visited.has(neighbour)) continue;
          // enqueue
          q.push(neighbour);
          visited.add(neighbour);
        }
      }
      depth++;
    }
  }

  return bfs(a, b);
}
