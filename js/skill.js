;(function(){
	addReady(function(){
		var oSkill = document.getElementById('skill');
		var aLi = oSkill.children;
		for(var i = 0;i<aLi.length;i++){
			;(function(index){
					function skillOver(){
						
						aLi[index].style.WebkitTransform = 'rotate(360deg) scale(1.5,1.5)';
						aLi[index].style.transform = 'rotate(360deg) scale(1.5,1.5)';
						aLi[index].style.transition = '0.5s all ease';
						
						aLi[index].style.backgroundColor = 'rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
						aLi[index].style.border = '1px solid rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
						aLi[index].children[0].style.backgroundColor = 'rgb('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+')';
						
						function tranEnd(){
							aLi[index].removeEventListener('transitionend',tranEnd,false);
							aLi[index].style.WebkitTransform = 'rotate(0deg) scale(1,1)';
							aLi[index].style.transform = 'rotate(0deg) scale(1,1)';
							aLi[index].style.transition = 'none';
						};
						aLi[index].addEventListener('transitionend',tranEnd,false);
						
					}
				addEvent(aLi[i],'mouseover',skillOver);
				
				
					function skillOut(){
						aLi[index].style.WebkitTransform = 'rotate(360deg) scale(1,1)';
						aLi[index].style.transition = '0.5s all ease';
						aLi[index].style.backgroundColor = 'rgba(0,0,0,0)';
						aLi[index].style.border = '1px solid #fff';
						aLi[index].children[0].style.backgroundColor = '#000';
						
						function tranEnd2(i){
							aLi[index].removeEventListener('transitionend',tranEnd2,false);
							//aLi[index].style.WebkitTransform = 'rotate(0deg) scale(1,1)';
							aLi[index].style.transform = 'rotate(0deg) scale(1,1)';
							aLi[index].style.transition = 'none';
						};
						aLi[index].addEventListener('transitionend',tranEnd2,false);
					}
				addEvent(aLi[i],'mouseout',skillOut);
			})(i);
			
		}
	});
})();
