### Adjacency List Model for Hierarchical Data
The adjacency list model is a hierarchical data model where each node has a pointer to its parent node (root element has a NULL pointer). The SQL table would look like this:
```javascript
CREATE TABLE category (
        category_id INT(10) AUTO_INCREMENT PRIMARY KEY,
        category_name VARCHAR(50) NOT NULL,
        parent_id INT(10) DEFAULT NULL
);
```
Parent id is actually a category id of the parent category. This method is quite simple; it is easy to see parent-child relations. Furthermore, the tree path (breadcrumb) can be generated using a simple PHP function.
```javascript
function get_path($category_id) {
    #look up the parent of this node
    $result = mysql_query("SELECT c1.parent_id,c2.category_name AS parent_name FROM category AS c1 LEFT JOIN category AS c2 ON c1.parent_id=c2.category_id WHERE c1.category_id='$category_id'");
    $row = mysql_fetch_array($result);
 
   #save the path in this array
    $path = array();
 
    #continue if this node is not the root node
    if ($row['parent_id']!=NULL) {
        #the last part of the path to node
 
        end($path);
        $last_key = key($path);
        $key = $last_key==0 ? 0 : $last_key+1;
        
        $path[$key]['category_id'] = $row['parent_id'];
        $path[$key]['category_name'] = $row['parent_name'];
 
        $path = array_merge(get_path($row['parent_id']), $path);
    }
  
   return $path;
}
```
To print the path, just do the following:
``javascript
for ($i=count($path)-1;$i==0;$i--){
     echo $path[$i]['category_name']. '>';
}
``
You have seen how to find the path from a leaf (node with no children) to the root node. Let's now see how to go down through the hierarchy -- i.e. start from the root element and display all nodes according to their hierarchical relations:
``javascript
function display_children($category_id, $level) {
    #retrieve all children
    $result = mysql_query("SELECT * FROM category WHERE parent_id='$category_id'");
  
    #display each child
    while ($row = mysql_fetch_array($result)) {
        #indent and display the title of this child
        #if you want to save the hierarchy, replace the following line with your code
        echo str_repeat('  ',$level) . $row['category_name'] . "<br/>";
        
       #call this function again to display this child's children
       display_children($row['category_id'], $level+1);
    }
}
``
However, the adjacency list model has its disadvantages. First, it is hard to implement it using only database queries. SQL queries require that you know at which level the node resides. Moreover, each tree level is implemented with a self-join, which means that each tree level decreases database performance.

Deleting nodes could also cause problems. If the deleted node has children, they would be orphaned -- i.e. they would have no parent element and would actually disappear from the tree.


### Nested Set Model for Hierarchical Data
The nested set model, also called modified preorder tree traversal, is another approach for handling hierarchical data. Instead of parent-child relations, hierarchy is represented as a set of nested containers by assigning left and right numerical values to each node. Take a look at the following example


#### Figure 1. Hierarchical Data Tree

The process of determining left and right values is done from left to right, assigning the left value first, then descending to the node's children and assigning the right value at the end. Take a look at the SQL structure:
```javascript
CREATE TABLE category (
        category_id INT(10) AUTO_INCREMENT PRIMARY KEY,
        category_name VARCHAR(50) NOT NULL,
        lft INT(10) NOT NULL,
        rgt INT(10) NOT NULL
);
```
Retrieving a full tree can be achieved with a single SQL query:
```javascript
SELECT * FROM category WHERE lft BETWEEN 1 AND 14 ORDER BY lft ASC
```
Numerical values in this query are the left and right values of a root node. The very same query is used to select a sub-tree - just replace the between part with sub-tree's left and right values. For example, if you want to select only men's clothes, the query would look like this:
```javascript
SELECT * FROM category WHERE lft BETWEEN 2 AND 7 ORDER BY lft ASC
```
Finding a single path to a node is done with a single query as well:
```javascript
SELECT * FROM category WHERE lft < 9 AND rgt > 10 ORDER BY lft ASC
```
Take a look at a few paths from leaf to root nodes. You will see that all ancestors have smaller left values and bigger right values. In this example, the path to the skirts subcategory is selected. Notice that all ancestors have left values smaller than 9 and right values bigger than 10.

Although more complex and harder to understand, the nested set model has many advantages. It does not rely much on recursion. Also, database queries are simpler and most of the tasks can be executed with a single query. These characteristics can significantly increase the application's performance, allowing it to handle complex hierarchical structures with acceptable speed.

On the other hand, updating the hierarchy (adding or deleting nodes) is more complicated and can be very slow.
### Adding a New Node in Hierarchical Data
Inserting a node into the hierarchy requires the update of left and right values of the nodes in the whole tree. So, let's say you want to add men's sneakers to the list of categories after the shorts. You would have to increase by two all left and right values that are bigger than 6. Why? Because the right values of shorts are 6 and you need 7 and 8 as left and right values of the new category.
```javascript
UPDATE category SET rgt=rgt+2 WHERE rgt>6
UPDATE category SET lft=lft+2 WHERE lft>6
```
Now there is enough space in the hierarchy for the new node, so let's insert it:
```javascript
INSERT INTO category (category_name,lft,rgt) VALUES ('Sneakers', '7', '8')
```
#### Deleting a Node in Hierarchical Data
Deleting a node in the nested set model is a bit more complicated than the same operation in the adjacency list model. The process is slightly different depending on whether you are deleting a leaf or a node with children. If the node to delete is a leaf, decrease all left and right values that are bigger than the node's left and right values by two and delete the node after that. Here is how you would do that in SQL:
```javascript
UPDATE category SET lft=lft-2 WHERE lft>5
UPDATE category SET rgt=rgt-2 WHERE rgt>6
DELETE FROM category WHERE lft='5' AND rgt='6'
```
In this example, the leaf node shorts is deleted. In case the node has children, the deletion process has one more step. For example, let's delete the men category:
```javascript
UPDATE category SET lft=lft-1, rgt=rgt-1 WHERE lft>2 AND rgt<7
UPDATE category SET lft=lft-2 WHERE lft>7
UPDATE category SET rgt=rgt-2 WHERE rgt>7
DELETE FROM category WHERE lft='2' AND rgt='7'
```

### Which Model Is Better for Hierarchical Data?

So, which model is better? It depends. If you need a more flexible model that can be easily updated, use the adjacency list model. In case you have a complex tree that does not need to be updated frequently, choose the nested set model.


References [Handling Hierarchical Data in MySQL and PHP](http://www.phpbuilder.com/articles/databases/mysql/handling-hierarchical-data-in-mysql-and-php.html)
