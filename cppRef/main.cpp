#include <iostream>
#include <string>
#include "Algorithms/GreedyScheduler.h"

using namespace std;

int main() {
    cout << "Hello, World!" << endl;

    GreedyScheduler gs;
    string s = gs.solve();

    cout << s;

//     cin.get();
    return 0;
}