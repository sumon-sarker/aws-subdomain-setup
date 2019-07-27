### Adobe Photoshop 2017 (Trial Reset)
1. You can navigate there with this command:
```javascript
cd /Library/Application\ Support/Adobe/Adobe\ Photoshop\ */AMT
```
2. Then you have to open the file and edit it. You can use just TextEdit app.
```javascript
open -a TextEdit application.xml
```

3. Now find the TrialSerialNumber Data key:
```javascript
<Data key="TrialSerialNumber">911997074887979240115317</Data>
```
4. And increment this number by one:
```javascript
<Data key="TrialSerialNumber">911997074887979240115318</Data>
```
Now you can try to run Photoshop, if it works you are done, if not continue.
5. Delete content of folder SLCache and SLStore
```javascript
/Library/Application\ Support/Adobe/SLCache
/Library/Application\ Support/Adobe/SLStore
```
6. Delete hidden files that look like this .G6A4G0095A60, .2RC5B2105A60, .A1C6B5105G64
```javascript
/Library/Caches
```
And that’s it. Now when you relaunch Photoshop you will be prompted to login and you should see fresh 7 days of trial.
