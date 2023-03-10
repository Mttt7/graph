const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')
const routes = [
    ['PHX','LAX'],
    ['PHX','JFK'],
    ['JFK','OKC'],
    ['JFK','HEL'],
    ['JFK','LOS'],
    //['JFK','EZE'],
    ['MEX','LAX'],
    ['MEX','BKK'],
    ['MEX','EZE'],
    ['MEX','LIM'],
    ['LIM','BKK']
]

// console.log(airports)
// console.log(routes)

//the graph
const adjacencyList = new Map()

//add node
function addNode(airport){
    adjacencyList.set(airport,[])
}
//add edge, undirected (<--->)
function addEdge(origin, destination){
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}

//create the Graph
airports.forEach(addNode)
routes.forEach(route => addEdge(...route))

//console.log(adjacencyList)

function bfs(start){
    const visited = new Set()
    
    const queue = [start]

    while(queue.length>0){
        const airport = queue.shift() //mutates the queue
        const destinations = adjacencyList.get(airport)
        for(const destination of destinations){
            
            
            if(destination=='BKK'){
                console.log('found it!')
            }

            if(!visited.has(destination)){
                visited.add(destination)
                queue.push(destination)
                console.log(destination)
            }
        }
        
    }
}

//DFS Depth First Search
function dfs(start,visited = new Set()){
    console.log(start)
    visited.add(start)

    const destinations = adjacencyList.get(start)

    for(const destination of destinations){
        if(destination==='BKK'){
            console.log(`<<DFS found Bangkok `)
        }

        if(!visited.has(destination)){
            dfs(destination,visited)
        }
    }
}

//bfs('PHX')
dfs('PHX')