#include "Prim.h"
#include "../Data Structures/Graph/Edge.h"
#include "../Data Structures/Graph/Graph.h"

string Prim::filePath = "C:/xampp/htdocs/wegukgi/cppRef/Data/algo2_hw1_q3_edges.txt";

Prim::Prim() {

};
string Prim::solve() {
    read();
    // todo testing

    Graph graph;

    GraphNode n1;
    GraphNode n2;
    Edge e(n1, n2, 10);

    bool test = e.contains(n1);
    n1.connect(e);
    bool test2 = n1.connects(e);
    vector<Edge> test2confirm = n1.edges;
    bool test2alt = n1.edges.at(0) == e;
    Edge* e2 = &e;
    bool test3 = e2 == &e;

    // todo boggle
    
//    bool test3 = n1.connects(n2);
//    graph.addEdge(e);
//    vector<Edge> test4 = graph.edges;

    return "";
};
Prim& Prim::read() {
    ifstream readFile;
    readFile.open(filePath);
    if (readFile.is_open()) {
        for (std::string line; std::getline(readFile, line); ) {


        }
    }
    return *this;
};