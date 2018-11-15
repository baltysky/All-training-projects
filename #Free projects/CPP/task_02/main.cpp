#include <iostream>

using namespace std;

int main()
{
    int n;
    cout << "Input 5-digits number: ";
    cin>>n;
    int arr[5];
    for (int i=0;i<5;i++){
        arr[i]=n%10;
        n/=10;
    }
    n=1;
    for (int i=5;i>0;i--){
        cout<<n<<" digit is: "<<arr[i-1]<<endl;
        n++;
    }
    return 0;
}
