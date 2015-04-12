#include "DisjointSetStructure.h"

template <typename T>
Set<T>& DisjointSetStructure<T>::find(T& element) {
    for (auto &set : sets) {
        Set<T>& ref = *set;
        if (ref.contains(element)) return ref;
    }
    Set<T> error;
    Set<T>& errorRef = error;
    return errorRef;
}

template <typename T>
DisjointSetStructure<T>& DisjointSetStructure<T>::remove(Set<T>& set) {
    sets.erase(std::remove(sets.begin(), sets.end(), &set));
    return *this;
}

template <typename T>
DisjointSetStructure<T>& DisjointSetStructure<T>::remove(Set<T>& a, Set<T>& b) {
    remove(a);
    remove(b);
    return *this;
}

template <typename T>
Set<T> DisjointSetStructure<T>::merge(Set<T>& a, Set<T>& b) {
    Set<T> set;
    for (auto &element : a.elements) {
        set.add(*element);
    }
    for (auto &element : b.elements) {
        set.add(*element);
    }
    remove(a, b);
    return set;
}

template <typename T>
Set<T>& DisjointSetStructure<T>::make(T& element) {
    Set<T> set;
    set.add(element);
    Set<T>* ptr;
    sets.push_back(ptr);
    Set<T>& setRef = set;
    return setRef;
}

template class DisjointSetStructure<GraphNode>;