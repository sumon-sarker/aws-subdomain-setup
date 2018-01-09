#### Add to bootstrap.php file
```javascript
\Cake\I18n\Time::setJsonEncodeFormat('yyyy-MM-dd HH:mm:ss');        // For any mutable DateTime
\Cake\I18n\FrozenTime::setJsonEncodeFormat('yyyy-MM-dd HH:mm:ss');  // For any immutable DateTime
\Cake\I18n\Date::setJsonEncodeFormat('yyyy-MM-dd HH:mm:ss');        // For any mutable Date
\Cake\I18n\FrozenDate::setJsonEncodeFormat('yyyy-MM-dd HH:mm:ss');  // For any immutable Date
```
