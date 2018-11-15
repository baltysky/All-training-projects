#include <iostream>
#include <fstream>

using namespace std;

int main()
{
    cout <<"Input filename: "<< endl;
    string fileName;
    cin>>fileName;
    ifstream fin(fileName);
    if (!fin.is_open()){
        cout<<"file error!";
        return 1;
    }
    char buf;
    int tester=0;
    while (1){
        buf=fin.get();
        if (fin.eof()) break;
        cout<<buf;
        if (buf=='{') tester++;
        if (buf=='}') tester--;
        if (tester<0) break;
    }
    fin.close();
    cout<<endl;
    if (tester!=0)
        cout<<"Braces balance DISTURBED";
    else
        cout<<"Braces balance is NOT disturbed";
    return 0;
}
