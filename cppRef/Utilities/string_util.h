#ifndef _CPPREF_STRING_UTIL_H_
#define _CPPREF_STRING_UTIL_H_
#include <sstream>
#include <vector>
using namespace std;

vector<string> &split(const string &s, char delim, vector<string> &elems);

vector<string> split(const string &s, char delim);

#endif //_CPPREF_STRING_UTIL_H_
