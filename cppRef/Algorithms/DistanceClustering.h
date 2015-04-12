#include "_algo_common.h"
#include "../Data Structures/Graph/_graph_common.h"
#include "../Data Structures/Graph/Graph.h"
#include "../Data Structures/Graph/Tree.h"

#include "../Data Structures/Set/_set_common.h"
#include "../Data Structures/Set/DisjointSetStructure.h"


#ifndef _CPPREF_DISTANCECLUSTERING_H_
#define _CPPREF_DISTANCECLUSTERING_H_

using namespace std;

class DistanceClustering : public Solver {
public:
    const static string path;
    const static string file;

    DistanceClustering();

    Graph graph;
    Tree tree;
    DisjointSetStructure<GraphNode> unionFind;

    Tree& kruskal();
    string solve();
    DistanceClustering & read();
};


#endif //_CPPREF_DISTANCECLUSTERING_H_
