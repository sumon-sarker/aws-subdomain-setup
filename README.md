##MySQL Create DB table from another DB
```javascript
CREATE TABLE TargetDB.NewTable LIKE SourceTable.TargetTable
```
##MySQL Insert DB table from another DB
####All columns
```javascript
INSERT INTO NewDB.NewTable
SELECT * FROM OldDB.TargetTable;
```
####Specific columns
```javascript
INSERT INTO NewDB.NewTable (Column1, Column2) 
SELECT column1, column2 FROM OldDB.TargetTable;
```
##MySQL Create/Copy table from same DB table
```javascript
CREATE TABLE NewTable LIKE TargetTable
```

Now enjoy MySQL database
