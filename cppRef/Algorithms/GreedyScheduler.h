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

    string solve();
    GreedyScheduler& read();
    GreedyScheduler& sort();
    int sum();
};


#endif //_CPPREF_GREEDYSCHEDULER_H_
