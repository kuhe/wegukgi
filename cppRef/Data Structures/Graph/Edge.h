#ifndef _CPPREF_EDGE_H_
#define _CPPREF_EDGE_H_

#include "_graph_common.h"
#include "GraphNode.h"

using namespace std;

class GraphNode;

class Edge {
public:
    int weight;
    GraphNode& node1;
    GraphNode& node2;
    Edge(GraphNode& node1, GraphNode& node2, int weight = 0);
    bool contains(GraphNode& node) const;
    bool operator == (Edge const& edge);
};


#endif //_CPPREF_EDGE_H_
