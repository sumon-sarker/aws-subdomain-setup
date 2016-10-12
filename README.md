# AWS subdomain setup (LAMP Server)

After setting your AWS EC2 server, You can follow below steps to create subdomain.

##Make subdomain directory
###Example
`sudo mkdir subdomain.yourwebsite.com' to your `www` directory
OR
`sudo mkdir -p /var/www/subdomain.yourwebsite.com'

##Create a index.html file for your subdonain
###Example
`sudo touch /var/www/subdomain.yourwebsite.com/index.html`
`sudo nano /var/www/subdomain.yourwebsite.com/index.html`
Add some HTML as your need
`^O`
`^X`

##Change the file ownership
###Example
`sudo chown -R user:group /var/www/subdomain.yourwebsite.com`
Here `user` = username, `group` = groupname

With the code above make sure you change `user` to the user you are acting as. By default on Ubuntu 14.04 your `user` name will be `ubuntu`. The group, as mentioned above, is the owner-group. In Ubuntu 14.04, the default is `www-data`. So the line would end up looking like this:

`sudo chown -R ubuntu:www-data /var/www/subdomain.yourwebsite.com`

Now your user (either through SSH or SFTP should have the right the modify `/var/www/subdomain.yourwebsite.com/*`

##Setup Vitrual host
###Example
`cd /etc/apache2/sites-available`
`ls`
If `subdomain.yourwebsite.com.conf` is not available then follow below command
`sudo cp 000-default.conf subdomain.yourwebsite.com.conf`
Now edit and save `subdomain.yourwebsite.com.conf` file like as below
`<VirtualHost *:80>
	ServerAdmin webmaster@localhost
	ServerName subdomain.yourwebsite.com
	ServerAlias subdomain.yourwebsite.com
	DocumentRoot /var/www/subdomain.yourwebsite.com

	ErrorLog ${APACHE_LOG_DIR}/error.log
	CustomLog ${APACHE_LOG_DIR}/access.log combined
<\/VirtualHost>
`

##Enable the subdomain
##Example
`sudo a2ensite subdomain.yourwebsite.conf`

##Restart Apache Server
###Example
`sudo service apache2 restart`


##Set AWS Route53
##Example
Go to AWS Route53 `Hosted Zone`
Go to `Create Recurd Set` type your subdomain name to `Name` field
Type `A - IPv4 Address`
Alias `Yes`
Alias target `Select your domain from list`
Save your record set

Now you can 'Test Record Set'

Enjoy AWS subdomain