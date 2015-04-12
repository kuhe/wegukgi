#include "DistanceClustering.h"

using namespace string_util;

const string DistanceClustering::path = Solver::programRoot() + "Data/";

const string DistanceClustering::file = "algo2_hw2_q1_clustering1.txt";
//const string DistanceClustering::file = "algo2_hw1_q1_test.txt";

DistanceClustering::DistanceClustering() {

}

Tree& DistanceClustering::kruskal() {
    /**
    http://en.wikipedia.org/wiki/DistanceClustering%27s_algorithm

    create a forest F (a set of trees), where each vertex in the graph is a separate tree
    create a set S containing all the edges in the graph
    while S is nonempty and F is not yet spanning
    remove an edge with minimum weight from S
    if that edge connects two different trees, then add it to the forest F, combining two trees into a single tree
    At the termination of the algorithm, the forest forms a minimum spanning forest of the graph. If the graph is
     connected, the forest has a single component and forms a minimum spanning tree.
     */
    Set<Edge> mstEdges;
    for (auto &node : graph.nodes) {
        unionFind.make(*node);
    }
    struct by_weight {
        const bool operator() (const Edge* a, const Edge* b) {
            return (*a).weight < (*b).weight;
        }
    };
    std::sort(graph.edges.begin(), graph.edges.end(), by_weight());
    for (auto &edge : graph.edges) {
        if (unionFind.find((*edge).node1) != *&unionFind.find((*edge).node2)) {
            mstEdges.add(*edge);
            unionFind.merge(unionFind.find((*edge).node1), unionFind.find((*edge).node2));
        }
    }
    for (auto &edge : mstEdges.elements) {
        tree.addEdge(*edge);
    }
    return tree;
}

string DistanceClustering::solve() {
    kruskal();

    return "";
}
DistanceClustering &DistanceClustering::read() {
    ifstream readFile;
    readFile.open(path + file);
    if (readFile.is_open()) {
        for (std::string line; std::getline(readFile, line); ) {
            vector<string> lineVector = split(line, ' ');
            if (lineVector.size() == 1) {
                unsigned int nodeCount = (unsigned int) stoi(lineVector.at(0));
                graph.nodes.reserve(nodeCount);
                graph.edges.reserve((nodeCount*(nodeCount-1)/2));
                for (int n = 1; n <= nodeCount; n++) {
                    GraphNode* node_ptr = new GraphNode();
                    graph.nodes.push_back(node_ptr);
                }
            } else if (lineVector.size() == 3) {
                int node1Id = stoi(lineVector.at(0)) - 1;
                int node2Id = stoi(lineVector.at(1)) - 1;
                double edgeWeight = stod(lineVector.at(2));
                Edge* edge_ptr = new Edge(*graph.nodes.at((unsigned int) node1Id), *graph.nodes.at((unsigned int) node2Id), edgeWeight);
                graph.edges.push_back(edge_ptr);
            }
        }
    }
    return *this;
}