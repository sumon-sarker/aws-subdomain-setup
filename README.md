# Wordpress LAMP Server Permalink Fix

###Open apache config file

```javascript
sudo gedit /etc/apache2/apache2.conf
```

###Find below line from `apache2.conf`
```javascript
<Directory /var/www/>
```

####Change `AllowOverride None` to `AllowOverride All`

###Enable rewrite module
```javascript
sudo a2enmod rewrite
```

###Restart apache server
```javascript
sudo service apache2 restart
```

Now enjoy wordpress permalink