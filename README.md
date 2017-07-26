####How to define protptype
```javascript
String.prototype.<YOUR_FURNTION_NAME>= function(){
 /*Example defination*/
 var id= ['۰','۱','۲','۳','٤','٥','٦','٧','٨','٩'];
 return this.replace(/[0-9]/g, function(w){
  return id[+w];
 });
}
```
####How to call
```javascript
var Variable = <StringVariable>.<YOUR_FURNTION_NAME>();
```
