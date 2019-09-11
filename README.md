#### CSV to SQL File Generator (PHP)
```javascript
<?php
$fp = fopen('csv.csv', 'r');
$fw = fopen('sql.sql', 'w');
$count = 0;
while ($csv=fgetcsv($fp)) {
	++$count;
	if ($count%200==0) {
		$str = "INSERT INTO `your_prefered_table` (`code`) VALUES ('$csv[1]')" . PHP_EOL;
	} else {
		$str = ",('$csv[1]')" . PHP_EOL;
	}
	fwrite($fw, $str);
}
fclose($fp);
fclose($fw);

?>
```
