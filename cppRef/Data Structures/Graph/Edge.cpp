#include "Edge.h"

Edge::Edge(GraphNode& node1, GraphNode& node2, int weight) : node1(node1), node2(node2), weight(weight) {

}
bool Edge::contains(GraphNode& node) const {
//    return false;
    GraphNode test = node;

    bool test2 = node1 == node;

    return node1 == node || node2 == node;
}

bool Edge::operator == (Edge const& edge) {
    return *this == edge;
}