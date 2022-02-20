// There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1. 
// You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent to.
//  More formally, for each v in graph[u], there is an undirected edge between node u and node v. 
//  The graph has the following properties:

// There are no self-edges (graph[u] does not contain u).
// There are no parallel edges (graph[u] does not contain duplicate values).
// If v is in graph[u], then u is in graph[v] (the graph is undirected).
// The graph may not be connected, meaning there may be two nodes u and v such that there is no path between them.
// A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.

// Return true if and only if it is bipartite.


// Example 1:


// Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
// Output: false
// Explanation: There is no way to partition the nodes into two independent sets such that every edge connects a node 
// in one and a node in the other.
// Example 2:


// Input: graph = [[1,3],[0,2],[1,3],[0,2]]
// Output: true
// Explanation: We can partition the nodes into two sets: {0, 2} and {1, 3}.



var isBipartite = function(graph) {
    // Check if a single connected component can be colored
    const dfs = (node, currentColor, colorMap) => {
        colorMap.set(node, currentColor);
        
        for (const adjNode of graph[node]) {
            const adjColor = colorMap.get(adjNode);
            if (adjColor && adjColor !== -currentColor) {
                return false;
            }
            if (!adjColor && !dfs(adjNode, -currentColor, colorMap)) {
                return false;
            }
        }
        
        return true;
    }
    
    // Check every connected component separately
    let colorMap = new Map();
    if (!dfs(0, 1, colorMap)) return false;
    
    for (let v = 1; v < graph.length; v++) {
        // If the node has not been colored, it has not been visited by
        // dfs which means it belongs to a new connected components group
        if (!colorMap.get(v)) {
            colorMap = new Map();
            // If any connected component can't be colored, the graph
            // can no longer be bipartite, so we return false
            if (!dfs(v, 1, colorMap)) return false;
        }
    }
    
    return true
};