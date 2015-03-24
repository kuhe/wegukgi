#include "_algo_common.h"
#include "../Data Structures/Graph/_graph_common.h"
#include "../Data Structures/Graph/Graph.h"

#ifndef _CPPREF_PRIM_H_
#define _CPPREF_PRIM_H_

using namespace std;

class Prim {
public:
    static string filePath;

    Prim(Graph graph = Graph());

    Graph& graph;

    string solve();
    Prim& read();
};


#endif //_CPPREF_PRIM_H_
