### MySQL Storeprocedure
```javascript
/*OVERRIDE DEFAULT DELIMITER*/
DELIMITER $$
CREATE PROCEDURE GroupCount (IN UserGroupID INT)
  BEGIN
    SELECT COUNT(*) FROM users WHERE user_group_id=UserGroupID;
  END$$
/*RESET DEFAULT DELIMITER*/
DELIMITER ;
```

```javascript
/*OVERRIDE DEFAULT DELIMITER*/
DELIMITER $$
CREATE PROCEDURE GroupCount (IN EmailID VARCHAR(64))
  BEGIN
    SELECT COUNT(*) FROM users WHERE email=EmailID;
  END$$
/*RESET DEFAULT DELIMITER*/
DELIMITER ;
```

Where `IN`,`OUT`,`INOUT` is the **Drection**
