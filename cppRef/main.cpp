#include <iostream>
#include <string>
#include "Algorithms/GreedyScheduler.h"

using namespace std;

int main() {
    cout << "Hello, World!" << endl;

    GreedyScheduler gs;
    string solution1 = gs.solve();
    string solution2 = gs.solve(true);

    cout << "Weight - length: " + solution1 << endl;
    cout << "weight / length: " + solution2 << endl;

    cout << "Yay..." << endl;
    // cin.get();
    return 0;
}