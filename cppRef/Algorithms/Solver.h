#include <string>

#ifndef _CPPREF_SOLVER_H_
#define _CPPREF_SOLVER_H_

using namespace std;

class Solver {
public:
    const static string path;
    const static string file;

    virtual string solve() {return "";};
    virtual Solver& read() {return *this;};
};


#endif //_CPPREF_SOLVER_H_
