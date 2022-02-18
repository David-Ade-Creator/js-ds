const breadthFirstPrint = (graph,source) => {
    const queue = [source];

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for(let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
}

const breadthFirstPrint2 = (graph,source) => {
    console.log(source);
    for(let neighbor of graph[source]){
        breadthFirstPrint2(graph,neighbor);
    }
}


const graphSample = {
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
};

breadthFirstPrint2 (graphSample, 'a');