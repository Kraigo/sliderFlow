Slider Flow
========

JQuery slider with scrolling navigation

Need JQuery http://jquery.com/download/ and JQuery UI http://jqueryui.com/

##### Version 0.2
- new parameter {equalHeight : true}. Sets the height of each cell is the largest cell

### How to use

##### 1. First need connect jquery.sliderFlow script

```html
<script src=”jquery.sliderFlow.min.js”></script>
```
##### 2. Create HTML
```html
<div id="slider">
	<ul class="slider-container">
		<li class="slide"></li>
		...
		<li class="slide"></li>
	</ul>
</div>
```

##### 3. Initialization function for the desired element
```javascript
$(function() {
	$('#slider').sliderFlow({
		container : '.slider-container',
		navigation : '.slider-navigation',
		slide : '.slide',
		equalHeight : true,
		speed : 300
	});
});
```
- **container** - `<ul>` containter class.
- **navigation** - class for navigation line.
- **slide** - class one slide.
- **speed** - speed of transition to new slide.

##### Rebuild slider for new items
```javascript
$('#slider').trigger('rebuild');
```

##### Check changes slides
```javascript
$('#slider').on('slidechange', function(e, a){
	// a - value of index current slide.
	console.log(a);
});
```

##### Go to specified slide
```javascript
var slideIndex = 4;
$('#slider').trigger('slideTo', slideIndex);
```