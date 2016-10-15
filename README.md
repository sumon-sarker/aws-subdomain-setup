##MySQL Create DB table from another DB

##MySQL Create/Copy table from same DB table
```javascript
CREATE TABLE NewTable LIKE TargetTable
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

Now enjoy MySQL database
