#include "GraphNode.h"

GraphNode& GraphNode::addNode(GraphNode& node) {
    if (!(std::find(paths.begin(), paths.end(), node) != paths.end())) {
        paths.push_back(node);
    }
    return *this;
};
GraphNode& GraphNode::connect(Edge& edge) {
    if (!(std::find(edges.begin(), edges.end(), edge) != edges.end())) {
        edges.push_back(edge);
    }
    addNode(edge.other(*this));
    return *this;
};

bool GraphNode::connects(Edge& edge) {
    return std::find(edges.begin(), edges.end(), edge) != edges.end();
};
bool GraphNode::connects(GraphNode& node) {
    return std::find(paths.begin(), paths.end(), node) != paths.end();
};

bool GraphNode::operator == (GraphNode const& node) {
    return this == &node;
};