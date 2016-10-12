# AWS subdomain setup (LAMP Server)

After setting your Ubuntu AWS EC2 server, You can follow below steps to create subdomain.

###Make subdomain directory
`sudo mkdir subdomain.mywebsite.com` to your `www` directory <br/>
#####OR<br/>
`sudo mkdir -p /var/www/subdomain.mywebsite.com`

###Create an index.html file for your subdomain
`sudo touch /var/www/subdomain.mywebsite.com/index.html` <br/>
`sudo nano /var/www/subdomain.mywebsite.com/index.html`<br/>
Add some HTML as your need<br/>
`^O`<br/>
`^X`<br/>

###Change the file ownership
`sudo chown -R user:group /var/www/subdomain.mywebsite.com` <br/>
Here `user` = username, `group` = groupname <br/>

With the code above make sure you change `user` to the user you are acting as. By default on Ubuntu 14.04 your `user` name will be `ubuntu`. The group, as mentioned above, is the owner-group. In Ubuntu 14.04, the default is `www-data`. So the line would end up looking like this <br/>

`sudo chown -R ubuntu:www-data /var/www/subdomain.mywebsite.com` <br/>

Now your user (either through SSH or SFTP should have the right the modify `/var/www/subdomain.mywebsite.com/*`

###Setup Vitrual host
`cd /etc/apache2/sites-available` <br/>
`ls` <br/>
If `subdomain.mywebsite.com.conf` is not available then follow below command <br/>
`sudo cp 000-default.conf subdomain.mywebsite.com.conf` <br/>
Now edit and save `subdomain.mywebsite.com.conf` file like as below <br/>
```javascript
&lt;VirtualHost *:80&gt;
	ServerAdmin webmaster@localhost
	ServerName subdomain.mywebsite.com
	ServerAlias subdomain.mywebsite.com
	DocumentRoot /var/www/subdomain.mywebsite.com

	ErrorLog ${APACHE_LOG_DIR}/error.log
	CustomLog ${APACHE_LOG_DIR}/access.log combined
&lt;/VirtualHost&gt;
```

###Enable the subdomain
`sudo a2ensite subdomain.mywebsite.conf`

###Restart Apache Server
`sudo service apache2 restart`

###Setup AWS Route53
Go to AWS Route53 `Hosted Zone` <br/>
Go to `Create Recurd Set` type your subdomain name to `Name` field <br/>
Type `A - IPv4 Address` <br/>
Alias `Yes` <br/>
Alias target `Select your domain from list` <br/>
Save your record set

Now you can 'Test Record Set'

Enjoy AWS subdomain
