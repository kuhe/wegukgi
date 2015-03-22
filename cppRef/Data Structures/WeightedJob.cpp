#include "WeightedJob.h"

WeightedJob::WeightedJob() {

}
WeightedJob::WeightedJob(int weight, int length) {
    this->weight = weight; this->length = length;
}
WeightedJob::WeightedJob(string weight, string length) {
    this->weight = stoi(weight); this->length = stoi(length);
}