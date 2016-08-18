
addReady(function(){
	var aLi = document.querySelectorAll('.main ul li');
	
	var le = aLi.length;
	
	for(var i=0;i<le;i++){
		aLi[i].style.WebkitTransition = '1s all ease '+((le-i)*500)+'ms';
		aLi[i].style.MozTransition = '1s all ease '+((le-i)*500)+'ms';
		aLi[i].style.mskitTransition = '1s all ease '+((le-i)*500)+'ms';
		aLi[i].style.transition = '1s all ease '+((le-i)*500)+'ms';
		
		aLi[i].style.WebkitTransform = 'rotateY('+360/le*i+'deg) translateZ(300px)';
		aLi[i].style.MozTransform = 'rotateY('+360/le*i+'deg) translateZ(300px)';
		aLi[i].style.mskitTransform = 'rotateY('+360/le*i+'deg) translateZ(300px)';
		aLi[i].style.transform = 'rotateY('+360/le*i+'deg) translateZ(300px)';
	}
});
