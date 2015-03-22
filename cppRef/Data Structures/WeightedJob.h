#ifndef _CPPREF_WEIGHTEDJOB_H_
#define _CPPREF_WEIGHTEDJOB_H_

#include "Node.h"
#include <string>

using namespace std;

class WeightedJob : Node<int> {
public:
    int weight;
    int length;
    WeightedJob();
    WeightedJob(int weight, int length);
    WeightedJob(string weight, string length);
};


#endif //_CPPREF_WEIGHTEDJOB_H_
