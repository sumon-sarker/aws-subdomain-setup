### Export HTML data to MS Word file using PHP
```javascript
<?php
	header("Content-type: application/vnd.ms-word");
	header("Content-Disposition: attachment;Filename=filename.doc");
	ob_start();
?>
<table width="100%" border="1">
	<tr>
		<th>YOUR</th>
		<th>HTML</th>
		<th>CODES</th>
	</tr>
</table>
<?php echo ob_get_clean() ?>
```
