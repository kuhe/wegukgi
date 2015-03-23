#include "WeightedJob.h"

WeightedJob::WeightedJob() {

}
WeightedJob::WeightedJob(int weight, int length) : weight(weight), length(length) {};
WeightedJob::WeightedJob(string weight, string length) {
    this->weight = stoi(weight); this->length = stoi(length);
}
bool WeightedJob::higherPriorityRatio(const WeightedJob& self, const WeightedJob& other) {
    double ownPriority, otherPriority;
    ownPriority = (double) self.weight / (double) self.length;
    otherPriority = (double) other.weight / (double) other.length;
    return ownPriority > otherPriority;
};
bool WeightedJob::operator > (const WeightedJob& other) const {
    int ownPriority = getPriority();
    int otherPriority = other.getPriority();
    bool comparison = ownPriority > otherPriority;
    if (comparison) {
        return true;
    }
    if (ownPriority == otherPriority) {
        return weight > other.weight;
    }
    return false;
};
bool WeightedJob::operator == (const WeightedJob& other) const {
    return weight == other.weight && length == other.length;
};
bool WeightedJob::operator < (const WeightedJob& other) const {
    return !(operator == (other)) && !(operator > (other));
};
int WeightedJob::getPriority() const {
    return weight - length;
}