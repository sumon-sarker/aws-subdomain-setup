#### Install vsftpd:

    sudo apt-get install vsftpd

#### Make backup of vsftpd.conf:

    sudo cp /etc/vsftpd.conf /etc/vsftpd.conf.orig

#### Setup firewall rules:

    sudo ufw allow 20/tcp
    sudo ufw allow 21/tcp
    sudo ufw allow 990/tcp
    sudo ufw allow 40000:50000/tcp
    sudo ufw status

##### Don't have firewall, then install:
    sudo apt-get install ufw
    Enable: sudo ufw enabe

Create a user and make the home directory this `/var/www/ftp/myApplication`
create an additional folder called ftp as seen above in case you need to add more folders for other users.

#### Create user:

    sudo usermod -d /var/www/ftp/myApplication ftpuser

#### Set its ownership, and be sure to remove write permissions with the following commands

    sudo chown nobody:nogroup /var/www/ftp
    sudo chmod a-w /var/www/ftp

#### Assign ownership to the myApplication foler to user ftpuser

    sudo chown ftpuser:ftpuser /var/www/ftp/myApplication

#### Setup `/etc/vsftpd.conf` add the following configurations:

    # Allow anonymous FTP? (Disabled by default).
    anonymous_enable=NO
    #
    # Uncomment this to allow local users to log in.
    local_enable=YES
    write_enable=YES

    # Prevent the FTP-connected user from accessing any files or commands outside 
    # the directory tree
    chroot_local_user=YES

    # Add a user_sub_token in order to insert the username in our local_root directory 
    # path so our configuration will work for this user and any future users that might 
    # be added

    user_sub_token=$USER
    local_root=/var/www/ftp

    # Set up the configuration so that access is given to a user only when they 
    # are explicitly added to a list rather than by default
    userlist_enable=YES
    userlist_file=/etc/vsftpd.userlist
    userlist_deny=NO

#### Create and add user to the user_list:

    echo "ftpuser" | sudo tee -a /etc/vsftpd.userlist

#### Restart daemon to load new configurations:

    sudo systemctl restart vsftpd


