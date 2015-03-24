#include <sstream>
#include <vector>

#ifndef _CPPREF_STRING_UTIL_H_
#define _CPPREF_STRING_UTIL_H_

namespace string_util {
    std::vector<std::string> &split(const std::string &s, char delim, std::vector<std::string> &elems);
    std::vector<std::string> split(const std::string &s, char delim);
}

#endif //_CPPREF_STRING_UTIL_H_
