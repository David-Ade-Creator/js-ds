// write a function haspath, that takes in object representing the adjacency list of a directed acyclic graph and two nodes (src,des)
// The function should return a boolean indicating whether or not there exists a direct path between the source and the destination
// nodes.

const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) return true;
  }

  return false;
};

// breadthfirst approach
const hasPath2 = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    let current = queue.shift();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};

const graph = {
  f: ["g", "j"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(hasPath2(graph, "f", "k"));
