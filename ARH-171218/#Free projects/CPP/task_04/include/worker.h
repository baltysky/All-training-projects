#pragma once
#include <string>
using namespace std;

class worker
{
   public:
        worker();
        void printWorker();
   protected:
        string name;
        int exp;
        int moneyPerHour;
        int workedHours;
   private:
};
