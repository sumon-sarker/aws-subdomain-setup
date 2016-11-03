####Edit mysql config file
```javascript
/etc/mysql/mysql.conf.d/mysqld.cnf
```
####Change bind-address
```javascript
bind-address = 0.0.0.0
#skip-networking
```
####Change mysql user permission
```javascript
GRANT ALL ON *.* TO 'USER-NAME'@'%' IDENTIFIED BY 'USER-PASSWORD';

OR

GRANT ALL ON DB-NAME.* TO 'USER-NAME'@'%' IDENTIFIED BY 'USER-PASSWORD';
FLUSH PRIVILEGES;
```
##Restart mysql
```javascript
sudo service mysql restart
```

##If any error Open(/etc/mysql/mysql.conf.d/mysqld.cnf) or (/etc/my.cnf) and Comment below line
```javascript
#old_passwords=1
```

##Check user password length, If 16, then set it to 41
```javascript
USE mysql;
SELECT User,Password,LENGTH(Password) FROM user;
UPDATE user SET Password=PASSWORD('vicidialnow') WHERE User='root';
```
##Restart mysql again
```javascript
sudo service mysql restart
```

Now enjoy MySQL database
