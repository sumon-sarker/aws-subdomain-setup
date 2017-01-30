### Instructions to Change PHP Installation

#### Find the php diredoty
```javascript
which php
```
#### Within the Terminal, run
```javascript
sudo nano ~/.bash_profile
```
#### Add new path for PHP
```javascript
export PATH=/Applications/MAMP/bin/php/php5.4.10/bin:$PATH
```
#### In Terminal, run
```javascript
source ~/.bash_profile
```
Now, Done! Happy PHPing :)
