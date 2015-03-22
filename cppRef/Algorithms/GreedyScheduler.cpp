#include "GreedyScheduler.h"
#include "../Utilities/string_util.cpp"

string GreedyScheduler::filePath = "C:/www/wegukgi/cppRef/Data/algo2_hw1_q1.txt";

string GreedyScheduler::solve() {
    read();
    return lines.at(0);
};

void GreedyScheduler::read() {
    ifstream readFile;
    readFile.open(filePath);
    string line;
    if (readFile.is_open()) {
        while (!readFile.eof()) {
            readFile >> line;
            lines.push_back(line);
            vector<string> v = split(line, ' ');
            WeightedJob job(v.at(0), v.at(1));
            jobs.push_back(job);
        }
    }
}
