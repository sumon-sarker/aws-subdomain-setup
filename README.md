#### MAcOSX intl
```javascript
/*UPDATE AUTH CONFIG ASSOCIATION [START]*/
  $this->Auth->config(['authenticate' => [
      'Form' => [
          'contain' =>false
      ]
  ]]);
  $this->Auth->config(['authenticate' => [
      'Form' => [
          'contain' => [
              'UserGroups'
          ]
      ]
  ]]);
/*UPDATE AUTH CONFIG ASSOCIATION [END]*/
```
