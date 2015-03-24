#include "Prim.h"

//string Prim::filePath = "C:/xampp/htdocs/wegukgi/cppRef/Data/algo2_hw1_q3_edges.txt";
string Prim::filePath = "C:/wamp/www/github/wegukgi/cppRef/Data/algo2_hw1_q3_edges.txt";

Prim::Prim(Graph graph) : graph(graph) {

};
string Prim::solve() {
    read();

    bool test1 = graph.nodes.at(1).connects(graph.nodes.at(2));
    bool test2 = graph.nodes.at(7).connects(graph.nodes.at(6));
    bool test3 = graph.nodes.at(2).connects(graph.nodes.at(65));
    bool test4 = graph.nodes.at(2).connects(graph.nodes.at(55));

    int x = 5;

    return "";
};

using namespace string_util;

Prim& Prim::read() {
    ifstream readFile;
    readFile.open(filePath);
    if (readFile.is_open()) {
        for (std::string line; std::getline(readFile, line); ) {
            vector<string> lineVector = split(line, ' ');
            if (lineVector.size() == 2) {
                unsigned int nodeCount = (unsigned int) stoi(lineVector.at(0));
                graph.nodes.reserve(nodeCount);
                graph.edges.reserve((unsigned int) stoi(lineVector.at(1)));
                for (int n = 1; n <= nodeCount; n++) {
                    GraphNode graphNode;
                    graph.nodes.push_back(graphNode);
                }
            } else {
                int node1Id = stoi(lineVector.at(0)) - 1;
                int node2Id = stoi(lineVector.at(1)) - 1;
                int edgeWeight = stoi(lineVector.at(2));
                Edge edge(graph.nodes.at((unsigned int) node1Id), graph.nodes.at((unsigned int) node2Id), edgeWeight);
                graph.edges.push_back(edge);
            }
        }
    }
    return *this;
};