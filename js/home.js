var parallax= document.querySelectorAll(".parallax");

parallax.forEach(function(element){
	window.addEventListener("scroll", function() {
    var scrolledHeight= window.pageYOffset,
    limit=element.offsetTop+element.offsetHeight;
    if(scrolledHeight >element.offsetTop && scrolledHeight <= limit) {
       element.style.backgroundPositionY= (scrolledHeight -element.offsetTop) /1.5+ "px";
    } 
    else {
       element.style.backgroundPositionY= "0";
    }
	});
});


