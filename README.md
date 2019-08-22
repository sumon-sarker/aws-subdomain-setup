#### Unique String Generator (C++)
```javascript
#include<iostream>
using namespace std;

/*
* First Generation
* Letter : I, J, O, Q, U, V and Number 1 & 0 is removed.
*/
void RandomStringGenerator(string prefix, string str, const int len) {
	static const char alphanumkeys[] =
	"23456789"
	"ABCDEFGHKLMNPRSTWXYZ";

	for (int i = 0; i < len; ++i) {
	str[i] = alphanumkeys[rand() % (sizeof(alphanumkeys) - 1)];
	}
	string sql = "INSERT INTO `product_verification_codes` (`code`) VALUES('"+prefix+str+"');";
	cout<<prefix+str<<endl;
	str[len] = 0;
}

int main(){
	freopen("pdcode.csv","w",stdout);
	
	for(int i=0;i<500000;i++)
		RandomStringGenerator("PD","00000000",8);

	return 0;
}
```
