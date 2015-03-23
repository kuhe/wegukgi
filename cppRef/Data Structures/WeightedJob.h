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
    static bool higherPriorityRatio(const WeightedJob& self, const WeightedJob& other);
    bool operator > (const WeightedJob& other) const;
    bool operator == (const WeightedJob& other) const;
    bool operator < (const WeightedJob& other) const;
    int getPriority() const;
};


#endif //_CPPREF_WEIGHTEDJOB_H_
