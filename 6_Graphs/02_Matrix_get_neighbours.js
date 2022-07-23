// num_rows/num_cols: total number of rows / cols in matrix

function getNeighbours(coord) {
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
      res.push([neighbour_row, neighbour_col]);
    }
  }
}
