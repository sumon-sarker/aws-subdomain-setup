#### JavaScript Ripple Effect
```html
<!DOCTYPE html>
<html>
	<head>
		<title>JavaScript Ripple Effect</title>
		<meta charset="utf-8">
		<style type="text/css">
			body{
			 margin:0;
			 padding:0;
			}
			.wrapper {
				display: flex;
				justify-content: space-around;
				align-items: center;
				flex-direction: row;
				position: absolute;
				left: 0;
				top: 0;
				bottom: 0;
				right: 0;
			}
			.ripplelink{
			  display:block;
			  float:left;
			  width:98%;
			  margin:1%;
			  height:10em;
			  line-height:10em;
			  text-align:center;
			  color:#fff;
			  text-decoration:none;
			  position:relative;
			  overflow:hidden;
			  transition: all 0.2s ease;
			  z-index:0;
			}
			.ink {
			  display: block;
			  position: absolute;
			  background:rgba(255, 255, 255, 0.5);
			  border-radius: 100%;
			  transform:scale(0);
			}
			.animate {
			  animation:ripple 0.65s linear;
			}
			@keyframes ripple {
			    100% {opacity: 0; transform: scale(1.5);}
			}
			.cyan{
			  background:#00bcd4;
			}

			.lightgreen{
			  background:#8bc34a;
			}
			.amber{
			  background:#ffc107;
			}
			.orange{
			  background:#ff9800;
			}
		</style>
	</head>
	<body>
		<div class="wrapper">
		  <a class="ripplelink cyan" href="#">Hover & Click me! (Cyan)</a>
		  <a class="ripplelink lightgreen" href="#">Hover & Click me! (Lightgreen)</a>
		  <a class="ripplelink amber" href="#">Hover & Click me! (Amber)</a>
		  <a class="ripplelink orange" href="#">Hover & Click me! (Orange)</a>
		</div>

		<script type="text/javascript">
			var links = document.querySelectorAll('.ripplelink');

			for (var i = 0, len = links.length; i < len; i++) {

			  links[i].addEventListener('click', function(e) {
			    var targetEl = e.target;
			    var inkEl = targetEl.querySelector('.ink');

			    if (inkEl) {
			      inkEl.classList.remove('animate');
			    } else {
			      inkEl = document.createElement('span');
			      inkEl.classList.add('ink');
			      inkEl.style.width = inkEl.style.height = Math.max(targetEl.offsetWidth, targetEl.offsetHeight) + 'px';
			      targetEl.appendChild(inkEl);
			    }

			    inkEl.style.left 	= (e.offsetX - inkEl.offsetWidth / 2) + 'px';
			    inkEl.style.top 	= (e.offsetY - inkEl.offsetHeight / 2) + 'px';
			    inkEl.classList.add('animate');
			  }, false);
			}
		</script>
	</body>
</html>
```
