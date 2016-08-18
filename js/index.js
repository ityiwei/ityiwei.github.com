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
	
	/*baner图为可视区高度宽度*/
	;(function(){
		addReady(function(){
			var oBox = document.getElementById('box');
			var oHome = document.getElementById('home');
			oHome.style.height = document.documentElement.clientHeight+'px';
			window.onresize = function(){
				function change(){
					oHome.style.height = document.documentElement.clientHeight+'px';
					oHome.style.width = document.documentElement.clientWidth+'px';
					oBox.style.width = document.documentElement.clientWidth+'px';
				}
				change();
				//document.addEventListener('resize',change,false);			
			}
			/*点击获取更多跳转*/
			var oContainer = document.getElementById('container');
			
			oContainer.children[3].onclick = function(){
				document.documentElement.scrollTop = oHome.offsetHeight;
				document.body.scrollTop = oHome.offsetHeight;
			};
		});
	})();
	
	/*个人简介运动效果*/
	;(function(){
		addReady(function(){
			
			var oRow2 = document.getElementById('row2');
			
			var oRow2page = oRow2.children[0];
			var oDis = oRow2.offsetWidth-oRow2page.offsetWidth;
			var oDis2 = oRow2.offsetWidth/2;
			var bOk = false;
			function meMove(){
				oRow2page.style.WebkitTransition = '2s all ease-in';
				oRow2page.style.MozTransition = '2s all ease-in';
				oRow2page.style.msTransition = '2s all ease-in';
				oRow2page.style.transition = '2s all ease-in';
				
				oRow2page.style.WebkitTransform = 'translate('+oDis+'px, 0)';
				oRow2page.style.MozTransform = 'translate('+oDis+'px, 0)';
				oRow2page.style.msTransform = 'translate('+oDis+'px, 0)';
				oRow2page.style.transform = 'translate('+oDis+'px, 0)';
				function tranEnd(){
					oRow2page.removeEventListener('transitionend',tranEnd,false);
					oRow2page.style.WebkitTransform = 'translate('+oDis/2+'px, 0)';
					oRow2page.style.MozTransform = 'translate('+oDis/2+'px, 0)'
					oRow2page.style.msTransform = 'translate('+oDis/2+'px, 0)';
					oRow2page.style.transform = 'translate('+oDis/2+'px, 0)';
					
					function tranEnd2(){
						oRow2page.removeEventListener('transitionend',tranEnd2,false);
					}
					oRow2page.addEventListener('transitionend',tranEnd2,false);
				}
				oRow2page.addEventListener('transitionend',tranEnd,false);
			};
			addEvent(window,'scroll',function(){
				var sT = document.documentElement.scrollTop||document.body.scrollTop;
				if(sT>getPos(oRow2page).top-550){
					if(bOk)return;
					bOk = true;
					meMove();
				}
			});			
		});
	})();
	/*作品展示穿墙效果*/
	;(function(){
		
		function through(obj){
			function rnd(m,n){
				return Math.floor(Math.random()*(n-m)+m);
			}
			function a2d(n){
				return 	n*180/Math.PI;
			}
			//判断鼠标从哪个边移入
			function hoverDir(obj,ev){
				var sT = document.documentElement.scrollTop || document.body.scrollTop;
				var x = obj.offsetLeft+obj.offsetWidth/2 - ev.clientX;
				var y = obj.offsetTop+obj.offsetHeight/2 - (ev.clientY+sT);
				return Math.round((a2d(Math.atan2(y,x))+180)/90)%4;
			}
			obj.onmouseover = function(ev){
				var oEvent = ev||event;
				var oFrom = oEvent.fromElement||oEvent.relatedTarget;
				if(obj.contains(oFrom)){
					return;
				}
				var dir = hoverDir(obj,oEvent);
				var oS = obj.children[0];
				oS.style.background = 'rgba('+rnd(0,256)+','+rnd(0,256)+','+rnd(0,256)+',0.5)';
				//左边 2 右侧0 上边3  下边1
				switch(dir){
					case 0:
						oS.style.left = '263px';
						oS.style.top = 0;
					break;
					case 1:
						oS.style.top = '204px';
						oS.style.left = 0;
					break;
					case 2:
						oS.style.left = '-263px';
						oS.style.top = 0;
					break;
					case 3:
						oS.style.top = '-204px';
						oS.style.left = 0;
					break;
				}
				move2(oS,{left:0,top:0});
			};
			
			obj.onmouseout = function(ev){
				var oEvent = ev||event;
				var oTo = oEvent.toElement||oEvent.relatedTarget;
				if(obj.contains(oTo)){
					return;
				}
				var dir = hoverDir(obj,oEvent);
				var oS = obj.children[0];
				//左边 2 右侧0 上边3  下边1
				switch(dir){
					case 0:
						move2(oS,{left:263,top:0});
					break;
					case 1:
						move2(oS,{left:0,top:204});
					break;
					case 2:
						move2(oS,{left:-263,top:0});
					break;
					case 3:
						move2(oS,{left:0,top:-204});
					break;
				}
			};
		}
		addReady(function(){
			var oWork = document.getElementById('work');
			var oUl = oWork.children[0];
			var aLi = oUl.children;
			for(var i = 0,length = aLi.length;i<length;i++){
				through(aLi[i]);
			}
		});
	})();
	;(function(){
		addReady(function(){
			var oWorkMore = document.getElementById('work_more');
			addEvent(oWorkMore,'click',function(){
				alert('建设中....');
			});
		});
	})();