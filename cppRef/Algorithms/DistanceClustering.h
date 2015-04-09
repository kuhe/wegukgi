#include "_algo_common.h"

#ifndef _CPPREF_DISTANCECLUSTERING_H_
#define _CPPREF_DISTANCECLUSTERING_H_

using namespace std;

class DistanceClustering : public Solver {
public:
    const static string path;
    const static string file;

    DistanceClustering();

    string solve();
    DistanceClustering& read();
};


#endif //_CPPREF_DISTANCECLUSTERING_H_
