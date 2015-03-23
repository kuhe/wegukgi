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

    GreedyScheduler();

    string solve(bool asRatio = false);
    GreedyScheduler& read();
    GreedyScheduler& sort(bool asRatio = false);
    double sum();
};


#endif //_CPPREF_GREEDYSCHEDULER_H_
