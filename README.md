### Go to folder to show Installed PHP Versions
```
/Applications/MAMP/bin/*
```

MAMP uses latest 2 PHP version to show in GUI mode.

### Change the GUI mode PHP Version

Edit the below file to Configure  `/Applications/MAMP/bin/mamp/mamp.conf.json`

```
....
{
  "name": "PHP",
  "version": "5.3.29, 5.4.45, 5.5.38, 5.6.37, 7.0.31, 7.1.20 & 7.2.8"
},
....
```
To
```
....
{
  "name": "PHP",
  "version": "5.3.29 & 7.2.8"
},
....
```
