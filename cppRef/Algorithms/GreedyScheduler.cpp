#include <c++/iostream>
#include <c++/bits/stl_algo.h>
#include "GreedyScheduler.h"
#include "../Utilities/string_util.cpp"

using namespace string_util;

//string GreedyScheduler::filePath = "C:/www/wegukgi/cppRef/Data/algo2_hw1_q1.txt";
string GreedyScheduler::filePath = "C:/wamp/www/github/wegukgi/cppRef/Data/algo2_hw1_q1.txt";
vector<string> lines;
vector<WeightedJob> jobs;

GreedyScheduler::GreedyScheduler() {

}

string GreedyScheduler::solve() {
    return to_string(read().sort().sum());
};
GreedyScheduler& GreedyScheduler::sort() {
    struct higherPriority {
        bool operator()(const WeightedJob& a,const WeightedJob& b) const {
            return a > b;
        }
    };
    std::sort(jobs.begin(), jobs.end(), higherPriority());
    return *this;
};
int GreedyScheduler::sum() {
    return 0;
};
GreedyScheduler& GreedyScheduler::read() {
    lines.reserve(10000); // let's pretend this helps
    jobs.reserve(10000);
    ifstream readFile;
    readFile.open(filePath);
    if (readFile.is_open()) {
        for (std::string line; std::getline(readFile, line); ) {
            lines.push_back(line);
            vector<string> v = split(line, ' ');
            if (v.size() > 1) {
                WeightedJob job(v.at(0), v.at(1));
                jobs.push_back(job);
            }
        }
    }
    return *this;
}
