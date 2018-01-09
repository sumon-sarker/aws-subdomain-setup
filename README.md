#### Add to bootstrap.php file
```javascript
Time::setJsonEncodeFormat('yyyy-MM-dd HH:mm:ss');        // For any mutable DateTime
FrozenTime::setJsonEncodeFormat('yyyy-MM-dd HH:mm:ss');  // For any immutable DateTime
Date::setJsonEncodeFormat('yyyy-MM-dd HH:mm:ss');        // For any mutable Date
FrozenDate::setJsonEncodeFormat('yyyy-MM-dd HH:mm:ss');  // For any immutable Date
```
