### MySQL Storeprocedure
```javascript
/*OVERRIDE DEFAULT DELIMITER*/
DELIMITER $$
CREATE PROCEDURE GroupCount (OUT UserGroupID INT)
  BEGIN
    SELECT COUNT(*) FROM users WHERE user_group_id=UserGroupID;
  END$$
/*RESET DEFAULT DELIMITER*/
DELIMITER ;
```
