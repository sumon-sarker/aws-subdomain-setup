### Image Crop View with Ratio [PHP GD Library]
```javascript
/*Path to Your Image Source file*/
$imgSrc = "globe-512.png";

/*Getting the image dimensions*/
list($width, $height) = getimagesize($imgSrc);

/*Saving the image into memory (For manipulation with GD Library)*/
$myImage = imagecreatefrompng($imgSrc);

/*Calculating the part of the image to use for thumbnail*/
if ($width > $height) {
  $y = 0;
  $x = ($width - $height) / 2;
  $smallestSide = $height;
} else {
  $x = 0;
  $y = ($height - $width) / 2;
  $smallestSide = $width;
}

/*Copying the part into thumbnail*/
$thumbSize = isset($_GET['size'])? $_GET['size'] : 100;
$thumb = imagecreatetruecolor($thumbSize, $thumbSize);
imagecopyresampled($thumb, $myImage, 0, 0, $x, $y, $thumbSize, $thumbSize, $smallestSide, $smallestSide);

/*Final output with proper ContentType*/
header('Content-type: image/jpeg');
imagejpeg($thumb);
```
