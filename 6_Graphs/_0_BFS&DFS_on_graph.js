function bfs(root) {
  let q = [root];
  let visited = new Set([root]);
  while (q.length > 0) {
    const node = q.shift();
    for (const neighbour of get_neighbours(node)) {
      if (visited.has(neighbour)) continue;
      q.push(neighbour);
      visited.add(neighbour);
    }
  }
}

function dfs(visited, root) {
  for (const neighbour of get_neighbours(root)) {
    if (visited.has(neighbour)) continue;
    visited.add(neighbour);
    dfs(neighbour, visited);
  }
}
