/**
 * Everything that is a circle.
 * 
 * @param {string} label 
 */
function Node(label) {
    var publicApi = {};

    publicApi.label = label;
    publicApi.incomingEdges = [];
    publicApi.outgoingEdges = [];

    publicApi.connectIncomingEdge = (edge, fromNode) => {
        publicApi.incomingEdges.push({
            edge : edge, 
            fromNode : fromNode
        });
    }

    publicApi.connectOutgoingEdge = (edge, toNode) => {
        publicApi.outgoingEdges.push({
            edge : edge, 
            toNode : toNode
        });
    }

    return publicApi;
}

/**
 * Everything like an arrow.
 * 
 * @param {string} label 
 */
function Edge(label) {
    var publicApi = {};

    publicApi.label = label;

    publicApi.connect = (fromNode, toNode) => {
        fromNode.connectOutgoingEdge(publicApi);
        toNode.connectIncomingEdge(publicApi);
    }

    return publicApi;
}

/**
 * A pile of stock
 * 
 * @param {string} label 
 * @param {number} stock 
 * @param {string} material 
 */
function StockPile(label, stock, material) {
    var publicApi = Node(label);

    publicApi.stock = stock;
    publicApi.material = material;

    return publicApi;
}

/**
 * Worker that carries something between nodes.
 * 
 * @param {string} label 
 * @param {number} minimumCapacity 
 * @param {number} maximumCapacity 
 */
function TransportWorker(label,minimumCapacity,maximumCapacity) {
    var publicApi = Edge(label);

    publicApi.minimumCapacity = minimumCapacity;
    publicApi.maximumCapacity = maximumCapacity;

    return publicApi;   
}

var a = Node("A");
var b = Node("B");
var edge = Edge(3).connect(a,b);
 
var sampleGraph = [
    a,b,edge
];