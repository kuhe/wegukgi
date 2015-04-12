#include "../Graph/_graph_common.h"
#include "Set.h"

#ifndef CPPREF_DISJOINTSET_H
#define CPPREF_DISJOINTSET_H

template <typename T>
class DisjointSet {
public:
    vector<Set<T>*> sets;

    Set<T>& find(T& element);
    Set<T> merge(Set<T>& a, Set<T>& b);
    Set<T> make(T& element);
};


#endif //CPPREF_DISJOINTSET_H
