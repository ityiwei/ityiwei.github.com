addReady(function(){
	;(function(){
		var oClock = document.querySelector('.clock');
		var oHou = document.querySelector('.hou');
		var oMin = document.querySelector('.min');
		var oSec = document.querySelector('.sec');
		var N = 60;
		for(var i=0;i<N;i++){
			var oS = document.createElement('span');
			oS.style.WebkitTransform = 'rotate('+i*6+'deg)';
			oS.style.MozTransform = 'rotate('+i*6+'deg)';
			oS.style.msTransform = 'rotate('+i*6+'deg)';
			oS.style.transform = 'rotate('+i*6+'deg)';
			if(i%5==0){
				oS.className = 'num';
				oS.innerHTML = '<em>'+(i/5||12)+'<\/em>'
				var oEm = oS.children[0];
				oEm.style.WebkitTransform = 'rotate('+-i*6+'deg)';
				oEm.style.MozTransform = 'rotate('+-i*6+'deg)';
				oEm.style.msTransform = 'rotate('+-i*6+'deg)';
				oEm.style.transform = 'rotate('+-i*6+'deg)';
			}
			oClock.appendChild(oS);
		}
		function tick(){
			var oDate = new Date();
			var h = oDate.getHours();
			var m = oDate.getMinutes();
			var s = oDate.getSeconds();
			
			oHou.style.WebkitTransform = 'rotate('+(h*30+m/60*30)+'deg)';
			oHou.style.MozTransform = 'rotate('+(h*30+m/60*30)+'deg)';
			oHou.style.msTransform = 'rotate('+(h*30+m/60*30)+'deg)';
			oHou.style.transform = 'rotate('+(h*30+m/60*30)+'deg)';			
			
			oMin.style.WebkitTransform = 'rotate('+(m*6+s/60*6)+'deg)';
			oMin.style.MozTransform = 'rotate('+(m*6+s/60*6)+'deg)';
			oMin.style.msTransform = 'rotate('+(m*6+s/60*6)+'deg)';
			oMin.style.transform = 'rotate('+(m*6+s/60*6)+'deg)';
			
			oSec.style.WebkitTransform = 'rotate('+s*6+'deg)';
			oSec.style.MozTransform = 'rotate('+s*6+'deg)';
			oSec.style.msTransform = 'rotate('+s*6+'deg)';
			oSec.style.transform = 'rotate('+s*6+'deg)';
		}
		tick();
		setInterval(tick,1000);
	})();
});
