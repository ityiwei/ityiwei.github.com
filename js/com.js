/*事件绑定*/
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		obj.attachEvent('on'+sEv,fn);	
	}
}

/*解除事件绑定*/
function removeEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.removeEventListener(sEv,fn,false);
	}else{
		obj.detachEvent('on'+sEv,fn);
	}
}

/*随机数*/
function rnd(m,n){
	return Math.floor(Math.random()*(n-m)+m);
}

/*window.onlaod加载*/
function addReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',fn,false)
	}else{
		document.attachEvent('onreadystatechange',function(){
			if(document.readyState == 'complete'){
				fn();
			}
		});
	}
}
/*补零函数*/
function toDou(n){
	return n<10?'0'+n:''+n;
}
/*获取时间补零*/
function getMyTime(s){
	return toDou(Math.floor(s/60))+':'+toDou(Math.floor(s%60));
}

		/*吸顶条*/
	function getPos(obj){
		var l = 0,
			t = 0;
		while(obj){
			l+=obj.offsetLeft;
			t+=obj.offsetTop;
			obj = obj.offsetParent;
		}
		return {
			left:l,
			top:t
		};
	}
	;(function(){
		addReady(function(){
			var oNavBar = document.getElementById('navbar').children[0];
			var oNavBar2 = document.getElementById('navbar').children[1];
			var oT = getPos(oNavBar).top;
			addEvent(window,'scroll',function(){
				var sT = document.documentElement.scrollTop||document.body.scrollTop;
				if(sT>=oT){
					oNavBar.style.position = 'fixed';
					oNavBar.style.backgroundColor = 'rgba(0,0,0,0.5)';
					oNavBar2.style.display = 'block';
				}else{
					oNavBar.style.position = '';
					oNavBar2.style.display = 'none';
				}
			});
		});
	})();
/*联系方式滑过显示二维码*/

;(function(){
	addReady(function(){
		var oCon = document.getElementById('con');
		var aLi = oCon.children;
		for(var i = 0;i<aLi.length-1;i++){
			;(function(index){
				/*鼠标移入事件绑定*/
				function footerOver(){
						aLi[index].children[0].style.display = 'block';
						aLi[index].children[0].style.background = 'url(img/QRCode'+index+'.png) no-repeat';
				
				}
				addEvent(aLi[i],'mouseover',footerOver);
				
				/*鼠标移出事件绑定*/
				function footerOut(){
					aLi[index].children[0].style.background = 'none';
				}
				addEvent(aLi[i],'mouseout',footerOut);
			})(i);
		}
	});
})();

		/*导航弹性菜单*/
	addReady(function(){
		function rnd(m,n){
			return Math.floor(Math.random()*(n-m)+m);
		}

		var oB = document.getElementById('block');
		var oNav = document.querySelector('.nav');
		var aLi = oNav.children;
		var iNow = 0;
		for(var i = 0;i<aLi.length;i++){
			addEvent(aLi[i],'mouseover',function(){
				move(oB,this.offsetLeft);
			});
			
			addEvent(aLi[i],'mouseout',function(){
				move(oB,iNow*aLi[0].offsetWidth);
			});
			;(function(index){
				aLi[i].onclick = function(){
					iNow = index;
				};
			})(i);
		}
	});








