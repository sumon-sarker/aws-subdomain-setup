## AWS subdomain setup (LAMP Server)
After setting your Ubuntu AWS EC2 server, You can follow below steps to create subdomain.
####Make subdomain directory
```javascript
sudo mkdir subdomain.mywebsite.com to your www directory

OR

sudo mkdir -p /var/www/subdomain.mywebsite.com
```
####Create an index.html file for your subdomain
```javascript
sudo touch /var/www/subdomain.mywebsite.com/index.html
sudo nano /var/www/subdomain.mywebsite.com/index.html
```
####Add some HTML as your need, then save and exit
```javascript
^O
^X
```
####Change the file ownership
```javascript
sudo chown -R user:group /var/www/subdomain.mywebsite.com
```
Here `user` = username, `group` = groupname <br/>

With the code above make sure you change `user` to the user you are acting as. By default on Ubuntu 14.04 your `user` name will be `ubuntu`. The group, as mentioned above, is the owner-group. In Ubuntu, the default is `www-data`. So the line would end up looking like this <br/>
```javascript
sudo chown -R ubuntu:www-data /var/www/subdomain.mywebsite.com
```
Now your user (either through SSH or SFTP should have the right the modify `/var/www/subdomain.mywebsite.com/*`
####Setup Vitrual host
```javascript
cd /etc/apache2/sites-available
ls
```
####If `subdomain.mywebsite.com.conf` is not available then follow below command
```javascript
sudo cp 000-default.conf subdomain.mywebsite.com.conf
```
####Now edit and save `subdomain.mywebsite.com.conf` file like as below
```javascript
<VirtualHost *:80>
	ServerAdmin webmaster@localhost
	ServerName subdomain.mywebsite.com
	ServerAlias subdomain.mywebsite.com
	DocumentRoot /var/www/subdomain.mywebsite.com

	ErrorLog ${APACHE_LOG_DIR}/error.log
	CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
####Enable the subdomain
```javascript
sudo a2ensite subdomain.mywebsite.conf
```
####Restart Apache Server
```javascript
sudo service apache2 restart
```
####Setup AWS Route53
Go to AWS Route53 `Hosted Zone` <br/>
Go to `Create Record Set` type your subdomain name to `Name` field <br/>
Otherwise use/update your existing ``Record Set`
Type `A - IPv4 Address` <br/>
Alias `Yes` <br/>
Alias target `Select your domain from list` <br/>
Save your record set

Now you can `Test Record Set`

Enjoy AWS subdomain
