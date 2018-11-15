#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main()
{
    cout << "Input matrix size: ";
    int row, col;
    cin>>row;
    col=row;
    int matr[row][col];
    srand(time(NULL));
    for (int i=0;i<row;i++){
        for (int j=0;j<col;j++){
            matr[i][j]=rand()%100;
            if (matr[i][j]<10) cout<<" ";
            cout<<matr[i][j]<<" ";
        }
      cout<<endl;
    }
    int sum=0;
    for (int i=0;i<row;i++)
        sum+=matr[i][i];
    cout<<"The trace of the matrix is: "<<sum;
    return 0;
}
}{