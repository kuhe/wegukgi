#include <string>
#include <c++/fstream>
#include <vector>

#ifndef _CPPREF_PRIM_H_
#define _CPPREF_PRIM_H_

using namespace std;

class Prim {
public:
    static string filePath;

    Prim();

    string solve();
    Prim& read();
};


#endif //_CPPREF_PRIM_H_
