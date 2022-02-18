// Write a function, largestComponent, that takes in the adjacency of an undirected graph.
// The function should return the size of te largest connected component in the graph.


largestComponent = (graph) => {
    let largest = 0;
    let visited = new Set();

    for(let node in graph) {
        let size = explore(graph, node, visited);
        if(size > largest) largest = size;
    };

    return largest;
};

const explore = (graph, node, visited) => {
    if(visited.has(node)) return 0;

    visited.add(node);

    let size = 1;

    for(let neighbor of graph[node]) {
        size += explore(graph, neighbor, visited);
    };

    return size;
}



const graph = {
    0:['8', '1', '5'],
    1:['0'],
    5:['0','8'],
    8:['0','5'],
    2:['3','4'],
    3:['2','4'],
    4:['3','2']
}

console.log(largestComponent(graph));