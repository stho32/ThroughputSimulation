/**
 * We need a unique id for the nodes!
 */
var nodeDispenserId = 0;
function NodeIdDispenser() {
    nodeDispenserId += 1;
    return nodeDispenserId;
}

/**
 * Everything that is a circle.
 * 
 * @param {string} label 
 */
function Node(label) {
    var publicApi = {};

    publicApi.id = NodeIdDispenser();
    console.log("Node " + label + ":" +  publicApi.id);
    publicApi.label = label;
    if ( label === undefined ) {
        label = publicApi.id;
    }
    publicApi.incomingEdges = [];
    publicApi.outgoingEdges = [];

    publicApi.connectIncomingEdge = (edge) => {
        publicApi.incomingEdges.push(edge);
    }

    publicApi.connectOutgoingEdge = (edge, toNode) => {
        publicApi.outgoingEdges.push(edge);
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
    publicApi.fromNode = null;
    publicApi.toNode = null;

    publicApi.connect = (fromNode, toNode) => {
        publicApi.fromNode = fromNode;
        publicApi.toNode = toNode;

        fromNode.connectOutgoingEdge(publicApi);
        toNode.connectIncomingEdge(publicApi);

        return publicApi;
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
function StockPile(label, stock, material, lazynessMs) {
    var publicApi = Node(label);

    publicApi.label = publicApi.label + " " + publicApi.id;
    publicApi.stock = stock;
    publicApi.material = material;

    window.setInterval(
        function() {
            if ( publicApi.id === 1 ) {
                console.log(publicApi.label + ": " + publicApi.stock);
            }

            for (let i = 0; i < publicApi.incomingEdges.length; i++ ) {
                if ( publicApi.id === 1 ) {
                    console.log(publicApi.incomingEdges[i]);
                }                
                if ( publicApi.incomingEdges[i].fromNode.stock > 0 ) {
                    publicApi.incomingEdges[i].fromNode.stock = publicApi.incomingEdges[i].fromNode.stock - 1;
                    publicApi.stock = publicApi.stock + 1;
                }
            } 
        },
        lazynessMs
    )

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

