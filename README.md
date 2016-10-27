##Edit mysql config file
```javascript
/etc/mysql/mysql.conf.d/mysqld.cnf
```
##Change bind-address
####All columns
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

Now enjoy MySQL database
