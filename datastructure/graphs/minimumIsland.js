// write a function, minimumisland, that takes in a grid containing Ws and Ls. W represents water and L represents water
// land. The function should return the size of the smallest island. An island is a vertically or horizontally or
// horizontally connected region of land.
// You may assume that the grid contains at least one island. The

const minimumisland = (grid) => {
  let minSize = Infinity;
  let visited = new Set();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = explore(grid, r, c, visited);
      if (size > 0 && size < minSize) minSize = size;
    }
  }

  return minSize;
};

const explore = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;

  if (grid[r][c] === 'W') return 0;

  const pos = r + ',' + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;

  size += explore(grid, r - 1, c, visited);
  size += explore(grid, r + 1, c, visited);
  size += explore(grid, r, c - 1, visited);
  size += explore(grid, r, c + 1, visited);

  return size;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(minimumisland(grid));
