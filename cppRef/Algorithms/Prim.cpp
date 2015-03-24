#include "Prim.h"
#include "../Data Structures/Graph/Edge.h"

string Prim::filePath = "C:/xampp/htdocs/wegukgi/cppRef/Data/algo2_hw1_q3_edges.txt";

Prim::Prim() {

};
string Prim::solve() {

    // todo testing

    GraphNode n1;
    GraphNode n2;
    Edge e(n1, n2, 10);

    bool test = e.contains(n1);

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