### Data of `wp_postmeta` table

| meta_id 	| post_id   |	meta_key |	meta_value  |
|---------- | --------- |  --------- |------------- |
|  1        | 1         | name       | Sumon        |
|  2        | 1         | email      | s@s.com      |
|  3        | 1         | password   | pwds         |

### SQL Query (`wp_posts` + `wp_postmeta` tables)
```javascript
SELECT
    wp_posts.ID,
    wp_posts.post_title,
    wp_postmeta.post_id,
    MAX(CASE WHEN wp_postmeta.meta_key='name' THEN wp_postmeta.meta_value ELSE NULL END) AS name,
    MAX(CASE WHEN wp_postmeta.meta_key='email' THEN wp_postmeta.meta_value ELSE NULL END) AS email,
    MAX(CASE WHEN wp_postmeta.meta_key='password' THEN wp_postmeta.meta_value ELSE NULL END) AS password
FROM wp_posts
LEFT JOIN wp_postmeta ON wp_postmeta.post_id = wp_posts.ID
GROUP BY
    wp_posts.ID,
    wp_postmeta.post_id
```
### Output will be look like

| ID 	| post_title   |	 post_id |	name |	email  |	password 	    |
----- | ------------ | --------- | ----- |-------- |--------------- |
|  1  | Title 1      | 1         | Sumon | s@s.com | pwds           |
|  2  | Title 2      | null      | null  | null    | null           |
|  3  | Title 3      | null      | null  | null    | null           |
