### Search 'foo' and Replace with 'bar'
UPDATE TableName SET FieldName = REPLACE(FieldName, 'foo', 'bar') WHERE INSTR(FieldName, 'foo') > 0;
