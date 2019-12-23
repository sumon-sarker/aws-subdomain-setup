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
	for(int i=0;i<500000;i++){
		RandomStringGenerator("PD","00000000",8);
	}
	return 0;
}
```
#### Unique Code Insert from existing to another table (PHP+MySQL)
```javascript
set_time_limit(0);
$pdo 	= new PDO('mysql:host=<host>;dbname=<database>','<user>','<password>');
$saving = $pdo;
$file 	= fopen('<filename>.csv', 'r');
$exists	= "SELECT code FROM <existing table> WHERE code = '%s'";
$insert	= "INSERT INTO <new table>(code) VALUES('%s')";
$index 	= 0;
$limit 	= 175001;
while ($csv = fgetcsv($file)) {
	$query 	= sprintf($exists,$csv[0]);
	$result	= $pdo->query($query)->fetch(PDO::FETCH_OBJ);
	if (!$result) {
		$index++;
		$code = $csv[0];
		$save = sprintf($insert,$code);
		$saving->prepare($save)->execute();
	}
	if ($index==$limit) {
		break;
	}
}
fclose($file);
```
