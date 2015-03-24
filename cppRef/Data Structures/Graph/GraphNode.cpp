#include "GraphNode.h"

GraphNode& GraphNode::connect(GraphNode& node) {
    if (!(std::find(paths.begin(), paths.end(), node) != paths.end())) {
        paths.push_back(node);
    }
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