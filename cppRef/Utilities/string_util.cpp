#include <sstream>
#include <vector>

#ifndef _CPPREF_STRING_UTIL_CPP_
#define _CPPREF_STRING_UTIL_CPP_

// http://stackoverflow.com/questions/236129/split-a-string-in-c

namespace string_util {
    std::vector<std::string> &split(const std::string &s, char delim, std::vector<std::string> &elems);
    std::vector<std::string> split(const std::string &s, char delim);
}

std::vector<std::string> &string_util::split(const std::string &s, char delim, std::vector<std::string> &elems) {
    std::stringstream ss(s);
    std::string item;
    while (std::getline(ss, item, delim)) {
        elems.push_back(item);
    }
    return elems;
}

std::vector<std::string> string_util::split(const std::string &s, char delim) {
    std::vector<std::string> elems;
    split(s, delim, elems);
    return elems;
}

#endif //_CPPREF_STRING_UTIL_CPP_