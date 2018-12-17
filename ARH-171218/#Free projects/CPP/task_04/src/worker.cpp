#include "worker.h"
#include <iostream>

using namespace std;

worker::worker(){
            cout<<"Enter worker's name: ";
            cin>>name;
            cout<<"Enter worker's experience: ";
            cin>>exp;
            cout<<"Enter worker's hourly wag: ";
            cin>>moneyPerHour;
            cout<<"Enter how much hours "<<name<<" has worked: ";
            cin>>workedHours;
        }
void worker::printWorker(){
            cout<<"Name: "<<name<<endl;
            cout<<"Expirience: "<<exp<<endl;
            cout<<"Hourly wage: "<<moneyPerHour<<endl;
            cout<<"Has worked: "<<workedHours<<endl;
            cout<<"Salary is: "<<moneyPerHour*workedHours<<endl;
            int premy;
            if (exp<1) premy=0;
            else if (exp<3) premy=5;
            else if (exp<5) premy=8;
            else premy=15;
            cout<<"Premy: "<<premy*moneyPerHour*workedHours/100<<endl;
        }
