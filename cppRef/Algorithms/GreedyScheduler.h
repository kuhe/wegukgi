#include <fstream>
#include <vector>
#include "../Data Structures/WeightedJob.h"

#ifndef _CPPREF_GREEDYSCHEDULER_H_
#define _CPPREF_GREEDYSCHEDULER_H_

using namespace std;

class GreedyScheduler {
public:
    static string filePath;
    vector<string> lines;
    vector<WeightedJob> jobs;

    string solve();
    void read();
};


#endif //_CPPREF_GREEDYSCHEDULER_H_
