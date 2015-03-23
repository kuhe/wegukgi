#include <c++/iostream>
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
    read();
    // return lines.at(1);
    return to_string(jobs.at(0).length);
};

void GreedyScheduler::read() {
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
}
