#include "_set_common.h"


#ifndef CPPREF_SET_H
#define CPPREF_SET_H
template <typename T>
class Set {
public:
    vector<T*> elements;
    Set& add(T& element);
    bool contains(T& element);
};


#endif //CPPREF_SET_H
