#include "DisjointSetStructure.h"

template <typename T>
Set<T>& DisjointSet<T>::find(T& element) {
    return *sets.at(0);
}

template <typename T>
Set<T> DisjointSet<T>::merge(Set<T>& a, Set<T>& b) {
    Set<T> set;
    return set;
}

template <typename T>
Set<T> DisjointSet<T>::make(T& element) {
    Set<T> set;
    return set;
}