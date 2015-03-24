#include "Graph.h"

Graph& Graph::addEdge(GraphNode& a, GraphNode& b) {
    if (!contains(a)) {
        nodes.push_back(a);
    }
    if (!contains(b)) {
        nodes.push_back(b);
    }
    a.connect(b);
    b.connect(a);
    return *this;
};
Graph& Graph::addEdge(Edge& edge) {

    return *this;
};

bool Graph::contains(GraphNode& node) {
    return std::find(nodes.begin(), nodes.end(), node) != nodes.end();
};