### Search 'foo' and Replace with 'bar'
```javascript
SET
    @Lat = '23.850218';
SET
    @Lng = '90.409107';
SELECT
    `title`,
    `latitude`,
    `longitude`,
    111.111 * DEGREES(
        ACOS(
            LEAST(
                COS(RADIANS(@Lat)) * COS(RADIANS(latitude)) * COS(RADIANS(@Lng - longitude)) + SIN(RADIANS(@Lat)) * SIN(RADIANS(latitude)),
                1.0
            )
        )
    ) AS distance_in_km
FROM
    department_locations
ORDER BY
    distance_in_km ASC;
```
