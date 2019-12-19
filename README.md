### Find and edit the Alias
```javascript
//On CentOS/RHEL and Fedora
nano /etc/httpd/conf.d/phpMyAdmin.conf
//On Debian and Ubuntu
nano /etc/phpmyadmin/apache.conf
//Change the alias to your desired url
#Alias /phpmyadmin /usr/share/phpmyadmin
Alias /mycustomurl /usr/share/phpmyadmin
```
